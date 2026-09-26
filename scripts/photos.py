# -*- coding: utf-8 -*-
"""Génère dreamlife/src/data/photos.ts.

Trois règles, dans l'ordre :

1. Direction photographique — pas de monument, pas de panorama, pas de plage,
   pas d'hôtel, pas de voyageur à valise. Des habitants au travail, des marchés,
   des cuisines, des ateliers, des fêtes de quartier. Chaque image de la
   sélection ci-dessous a été regardée avant d'y entrer.
2. Exactitude — la légende dit le lieu réel du fichier, relu dans les
   métadonnées Commons. Une photo prise à Calca n'est pas légendée « Cusco »,
   une photo prise à Barranquilla n'entre pas dans Medellín.
3. Licence — CC BY / CC BY-SA / CC0 / domaine public seulement, auteur et
   licence transportés avec l'image et affichés par le composant Photo.

Les URL de vignettes sont demandées à l'API Commons aux largeurs voulues : les
largeurs arbitraires sont refusées par upload.wikimedia.org, mais une vignette
demandée via l'API est générée puis servie.

Usage : python3 dreamlife/scripts/photos.py > /dev/null
"""
import json, os, re, sys, time, urllib.parse, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
cand = json.load(open(os.path.join(HERE, "candidates.json")))
API = "https://commons.wikimedia.org/w/api.php"
UA = {"User-Agent": "DreamLife-prototype/0.1 (photo manifest; contact repo owner)"}

# slug -> [(index dans candidates.json, alt, légende)] ; le premier est la couverture.
SEL = {
"marseille": [
 (22, "Un homme accroche des tresses d’ail sur un étal de la foire à l’ail", "Foire à l’ail et aux taraïettes, Marseille"),
 (21, "Des clients devant un étal de fruits secs et d’olives, à la foire de la Saint-Jean", "Foire de la Saint-Jean, Marseille"),
 (23, "L’allée d’un marché de rue de L’Estaque, en fin de matinée", "Marché de L’Estaque, Marseille"),
 (35, "Du linge étendu devant les volets d’un immeuble du Panier", "Le Panier, Marseille"),
 (2, "Des poissonnières servent leurs clients sur le marché du Vieux-Port", "Marché aux poissons du Vieux-Port, Marseille"),
],
"naples": [
 (16, "Des habitants font leurs courses entre les étals d’un marché napolitain", "Marché de quartier, Naples"),
 (23, "Une femme choisit ses pâtisseries devant la vitrine d’une pasticceria", "Pasticceria, Naples"),
 (22, "Du linge tendu entre les façades d’une ruelle du Rione Sanità", "Rione Sanità, Naples"),
 (8, "Un étal de poissons et de coquillages installé dans la rue", "Poissonnerie de rue, Naples"),
 (6, "Les bacs et les passants du marché de la Pignasecca", "Marché de la Pignasecca, Naples"),
],
"marrakech": [
 (1, "Un vendeur derrière son étal de nourriture fumant, sur la place Jemaa el-Fna", "Jemaa el-Fna, Marrakech"),
 (0, "Un vendeur de fruits arrange ses étals dans une allée du souk", "Souk, Marrakech"),
 (7, "Un artisan travaille assis devant son atelier, dans une ruelle du souk", "Artisan du souk, Marrakech"),
 (13, "Une formatrice façonne des ghoriba dans la cuisine d’un centre de formation", "Centre de formation Amal, Marrakech"),
 (14, "Une famille amazighe prend le thé, assise à même le sol", "Haut Atlas, près de Marrakech"),
],
"tunis": [
 (8, "Trois hommes jouent au tawla sur une table de café", "Joueurs de tawla, Tunisie"),
 (13, "Un boulanger sort ses plaques de pâtisseries du four", "Boulangerie de quartier, Hergla, Tunisie"),
 (4, "Des marchands empilent des melons sur les étals du marché central", "Marché central, Tunis"),
 (5, "Un vendeur en chéchia prépare ses confiseries sur un étal de rue", "Marché de rue, Tunis"),
 (6, "Un client choisit ses légumes sur un marché de quartier", "Marché de quartier, Tunis"),
],
"kyoto": [
 (11, "Un vendeur sert des brochettes d’oden derrière son stand de marché", "Marché de Tōji, Kyoto"),
 (1, "Les allées du marché de Nishiki, pleines de clients en fin d’année", "Marché de Nishiki, Kyoto"),
 (10, "Un enfant en kamishimo attend le départ du cortège du Gion Matsuri", "Gion Matsuri, Kyoto"),
 (2, "L’étalage d’un poissonnier du marché de Nishiki", "Marché de Nishiki, Kyoto"),
 (3, "La devanture d’une boutique de tsukemono du marché de Nishiki", "Boutique de tsukemono, Kyoto"),
],
"chiang-mai": [
 (1, "Un stand de cuisine de rue entouré de clients, le soir", "Cuisine de rue, Chiang Mai"),
 (5, "Une vendeuse prépare des brochettes derrière son étal de rue", "Étal de rue, Chiang Mai"),
 (9, "La foule et les lampes d’un marché de nuit de Chiang Mai", "Marché de nuit, Chiang Mai"),
 (14, "L’intérieur d’une gargote à khao soi, tabourets bas et clients au comptoir", "Gargote à khao soi, Chiang Mai"),
 (13, "Un bol de khao soi au poulet, le curry de nouilles du Nord thaï", "Khao soi, Chiang Mai"),
],
"ubud": [
 (8, "Un paysan laboure sa rizière avec un attelage de bovins, au crépuscule", "Labour traditionnel « matekap », Bali"),
 (5, "Une Balinaise montre à des visiteurs comment tresser une offrande canang sari", "Apprentissage des canang sari, Bali"),
 (4, "Des passants et des enfants dans la rue du marché d’Ubud", "Marché d’Ubud, Bali"),
 (13, "Les mains d’un musicien sur les lames de bambou d’un calung", "Gamelan, Bali"),
 (10, "Des villageois rassemblés pour une cérémonie de village", "Cérémonie de village, Bali"),
],
"medellin": [
 (20, "Des danseurs improvisent devant un mur peint, entourés d’habitants", "Comuna 13, Medellín"),
 (23, "L’entrée de la Comuna 13, sa rue commerçante et ses fanions", "Entrée de la Comuna 13, Medellín"),
 (27, "Des habitants et des visiteurs dans les escaliers peints du quartier", "Comuna 13, Medellín"),
 (12, "Le terrain de sport du quartier, en bas des immeubles", "Comuna 13, Medellín"),
 (18, "Les maisons de brique de la Comuna 13, accrochées à la pente", "Comuna 13 — San Javier, Medellín"),
],
"cusco": [
 (26, "Des tisseuses présentent leurs pièces, assises à même le sol", "Tisseuses de Ccaccaccollo, région de Cusco"),
 (3, "Les étals et les clients du marché de San Pedro", "Marché de San Pedro, Cusco"),
 (37, "Une marchande de quinoa derrière son étal du marché couvert", "Marché de Calca, vallée de Cusco"),
 (35, "Une vendeuse de fromages derrière son étal du marché", "Marché de Calca, vallée de Cusco"),
 (19, "Des musiciens jouent du cuivre dans une rue de Cusco", "Musiciens de rue, Cusco"),
],
"salvador": [
 (8, "Une baiana prépare ses acarajés derrière son étal de rue", "Baiana d’acarajé, Salvador de Bahia"),
 (11, "Une roda de capoeira se forme, les joueurs en blanc au centre", "Roda de capoeira, Bahia"),
 (6, "Une femme en tenue blanche fait frire des acarajés sous son auvent", "Baiana d’acarajé, Bahia"),
 (9, "Trois baianas tiennent leur étal de cuisine de rue", "Cuisine de rue bahianaise"),
 (14, "Des enfants en tenue blanche attendent leur tour autour d’une roda", "École de capoeira, Cachoeira, Bahia"),
],
}

HERO = [("marrakech", 1), ("ubud", 8), ("salvador", 11)]
POOL = {"chiang-mai": "chiangmai"}
WIDTHS = (640, 1280)


def api(params):
    for attempt in range(6):
        try:
            req = urllib.request.Request(API + "?" + urllib.parse.urlencode(params), headers=UA)
            out = json.load(urllib.request.urlopen(req, timeout=40))
            time.sleep(1.4)
            return out
        except Exception as exc:  # 429 fréquent : on attend et on réessaie
            print("retry", exc, file=sys.stderr)
            time.sleep(4 * (attempt + 1))
    raise SystemExit("API Commons injoignable")


def thumbs(titles, width):
    """{titre: url de vignette} — demander la vignette à l'API la fait générer."""
    urls = {}
    for k in range(0, len(titles), 20):
        batch = titles[k : k + 20]
        data = api({
            "action": "query", "format": "json",
            "titles": "|".join("File:" + t for t in batch),
            "prop": "imageinfo", "iiprop": "url", "iiurlwidth": str(width),
        })
        for page in (data.get("query") or {}).get("pages", {}).values():
            info = (page.get("imageinfo") or [{}])[0]
            if info.get("thumburl"):
                urls[page["title"][5:]] = info["thumburl"].split("?")[0]
    return urls


titles = [cand[POOL.get(slug, slug)][i]["title"] for slug, sel in SEL.items() for i, _, _ in sel]
by_width = {w: thumbs(titles, w) for w in WIDTHS}

esc = lambda s: s.replace("\\", "\\\\").replace("'", "\\'")


def entry(slug, idx, alt, caption):
    item = cand[POOL.get(slug, slug)][idx]
    title = item["title"]
    small, large = by_width[640].get(title), by_width[1280].get(title)
    if not large:
        raise SystemExit(f"vignette manquante : {title}")
    srcset = ", ".join(f"{u} {w}w" for w, u in ((640, small), (1280, large)) if u)
    return (
        "  {\n"
        f"    id: '{slug}-{idx}',\n"
        f"    src: '{large}',\n"
        f"    srcset:\n      '{srcset}',\n"
        f"    alt: '{esc(alt)}',\n"
        f"    caption: '{esc(caption)}',\n"
        f"    author: '{esc(item['author'] or 'Auteur inconnu')}',\n"
        f"    license: '{esc(item['license'])}',\n"
        f"    page: '{item['page']}',\n"
        "  },\n"
    )


out = ['''/**
 * Manifeste photographique — GÉNÉRÉ par dreamlife/scripts/photos.py.
 * Ne pas éditer à la main : relancer le script.
 *
 * Direction assumée : pas de monuments, pas de panoramas, pas de plages, pas de
 * halls d'hôtel, pas de voyageurs à valises. Des habitants au travail, des
 * marchés, des cuisines, des ateliers, des fêtes de quartier.
 *
 * Source : Wikimedia Commons, licences libres uniquement. L'auteur et la
 * licence sont affichés par le composant Photo — obligation de licence, et
 * signe documentaire assumé par la marque.
 */
export type Photo = {
  id: string;
  src: string;
  srcset: string;
  alt: string;
  /** Le lieu réel de la prise de vue, vérifié dans les métadonnées Commons. */
  caption: string;
  author: string;
  license: string;
  page: string;
};

''']

for slug, sel in SEL.items():
    const = slug.replace("-", "_").upper()
    out.append(f"const {const}: Photo[] = [\n")
    for idx, alt, cap in sel:
        out.append(entry(slug, idx, alt, cap))
    out.append("];\n\n")

out.append("export const PHOTOS: Record<string, Photo[]> = {\n")
for slug in SEL:
    out.append(f"  '{slug}': {slug.replace('-', '_').upper()},\n")
out.append("};\n\n")

out.append("/** Les trois photographies du hero, en fondu lent. */\nexport const HERO_ROTATION: Photo[] = [\n")
for slug, idx in HERO:
    pos = [n for n, (i, _, _) in enumerate(SEL[slug]) if i == idx][0]
    out.append(f"  PHOTOS['{slug}'][{pos}],\n")
out.append("];\n\n")

out.append("""export const photosOf = (slug: string): Photo[] => PHOTOS[slug] ?? [];

/** La couverture d'une ville : carte de destination, hero de page, sections. */
export const coverOf = (slug: string): Photo => photosOf(slug)[0] ?? HERO_ROTATION[0];

/** Toutes les images, pour les crédits et les vérifications de liens. */
export const ALL_PHOTOS: Photo[] = Object.values(PHOTOS).flat();
""")

target = os.path.join(HERE, "..", "src", "data", "photos.ts")
open(os.path.abspath(target), "w").write("".join(out))
print("écrit", os.path.abspath(target), "—", len(titles), "photos", file=sys.stderr)
