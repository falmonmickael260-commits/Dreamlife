/**
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

const MARSEILLE: Photo[] = [
  {
    id: 'marseille-22',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Foire_%C3%A0_l%27ail_et_aux_tara%C3%AFettes.jpg/1280px-Foire_%C3%A0_l%27ail_et_aux_tara%C3%AFettes.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Foire_%C3%A0_l%27ail_et_aux_tara%C3%AFettes.jpg/960px-Foire_%C3%A0_l%27ail_et_aux_tara%C3%AFettes.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Foire_%C3%A0_l%27ail_et_aux_tara%C3%AFettes.jpg/1280px-Foire_%C3%A0_l%27ail_et_aux_tara%C3%AFettes.jpg 1280w',
    alt: 'Un homme accroche des tresses d’ail sur un étal de la foire à l’ail',
    caption: 'Foire à l’ail et aux taraïettes, Marseille',
    author: 'Bryce Edwards',
    license: 'CC BY 2.0',
    page: 'https://commons.wikimedia.org/wiki/File:Foire_%C3%A0_l%27ail_et_aux_tara%C3%AFettes.jpg',
  },
  {
    id: 'marseille-21',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Foire_de_la_Saint-Jean_%C3%A0_Marseille.jpg/1280px-Foire_de_la_Saint-Jean_%C3%A0_Marseille.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Foire_de_la_Saint-Jean_%C3%A0_Marseille.jpg/960px-Foire_de_la_Saint-Jean_%C3%A0_Marseille.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Foire_de_la_Saint-Jean_%C3%A0_Marseille.jpg/1280px-Foire_de_la_Saint-Jean_%C3%A0_Marseille.jpg 1280w',
    alt: 'Des clients devant un étal de fruits secs et d’olives, à la foire de la Saint-Jean',
    caption: 'Foire de la Saint-Jean, Marseille',
    author: 'Bryce Edwards',
    license: 'CC BY 2.0',
    page: 'https://commons.wikimedia.org/wiki/File:Foire_de_la_Saint-Jean_%C3%A0_Marseille.jpg',
  },
  {
    id: 'marseille-23',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/March%C3%A9.jpg/1280px-March%C3%A9.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/March%C3%A9.jpg/960px-March%C3%A9.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/March%C3%A9.jpg/1280px-March%C3%A9.jpg 1280w',
    alt: 'L’allée d’un marché de rue de L’Estaque, en fin de matinée',
    caption: 'Marché de L’Estaque, Marseille',
    author: 'Irønie',
    license: 'CC BY 3.0',
    page: 'https://commons.wikimedia.org/wiki/File:March%C3%A9.jpg',
  },
  {
    id: 'marseille-35',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Marseille_Panier_Drying_Laundry.jpg/1280px-Marseille_Panier_Drying_Laundry.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Marseille_Panier_Drying_Laundry.jpg/960px-Marseille_Panier_Drying_Laundry.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Marseille_Panier_Drying_Laundry.jpg/1280px-Marseille_Panier_Drying_Laundry.jpg 1280w',
    alt: 'Du linge étendu devant les volets d’un immeuble du Panier',
    caption: 'Le Panier, Marseille',
    author: 'Benh LIEU SONG',
    license: 'CC BY-SA 3.0',
    page: 'https://commons.wikimedia.org/wiki/File:Marseille_Panier_Drying_Laundry.jpg',
  },
  {
    id: 'marseille-2',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Marseille_%28France%29%2C_fish_market_in_Vieux-Port%2C_2013.JPG/1280px-Marseille_%28France%29%2C_fish_market_in_Vieux-Port%2C_2013.JPG',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Marseille_%28France%29%2C_fish_market_in_Vieux-Port%2C_2013.JPG/960px-Marseille_%28France%29%2C_fish_market_in_Vieux-Port%2C_2013.JPG 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Marseille_%28France%29%2C_fish_market_in_Vieux-Port%2C_2013.JPG/1280px-Marseille_%28France%29%2C_fish_market_in_Vieux-Port%2C_2013.JPG 1280w',
    alt: 'Des poissonnières servent leurs clients sur le marché du Vieux-Port',
    caption: 'Marché aux poissons du Vieux-Port, Marseille',
    author: 'Philippe Alès',
    license: 'CC BY-SA 3.0',
    page: 'https://commons.wikimedia.org/wiki/File:Marseille_(France),_fish_market_in_Vieux-Port,_2013.JPG',
  },
];

const NAPLES: Photo[] = [
  {
    id: 'naples-16',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Buyers.jpg/1280px-Buyers.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Buyers.jpg/960px-Buyers.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Buyers.jpg/1280px-Buyers.jpg 1280w',
    alt: 'Des habitants font leurs courses entre les étals d’un marché napolitain',
    caption: 'Marché de quartier, Naples',
    author: 'Aisav72',
    license: 'CC BY-SA 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:Buyers.jpg',
  },
  {
    id: 'naples-23',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Bab%C3%A0_shop_in_Naples.jpg/1280px-Bab%C3%A0_shop_in_Naples.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Bab%C3%A0_shop_in_Naples.jpg/960px-Bab%C3%A0_shop_in_Naples.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Bab%C3%A0_shop_in_Naples.jpg/1280px-Bab%C3%A0_shop_in_Naples.jpg 1280w',
    alt: 'Une femme choisit ses pâtisseries devant la vitrine d’une pasticceria',
    caption: 'Pasticceria, Naples',
    author: 'Mattia Luigi Nappi',
    license: 'CC BY-SA 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:Bab%C3%A0_shop_in_Naples.jpg',
  },
  {
    id: 'naples-22',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Rione_sanit%C3%A0_1.jpg/1280px-Rione_sanit%C3%A0_1.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Rione_sanit%C3%A0_1.jpg/960px-Rione_sanit%C3%A0_1.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Rione_sanit%C3%A0_1.jpg/1280px-Rione_sanit%C3%A0_1.jpg 1280w',
    alt: 'Du linge tendu entre les façades d’une ruelle du Rione Sanità',
    caption: 'Rione Sanità, Naples',
    author: 'Barrosh.m',
    license: 'CC BY-SA 3.0',
    page: 'https://commons.wikimedia.org/wiki/File:Rione_sanit%C3%A0_1.jpg',
  },
  {
    id: 'naples-8',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Naples_-_Italy_%2814849895827%29.jpg/1280px-Naples_-_Italy_%2814849895827%29.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Naples_-_Italy_%2814849895827%29.jpg/960px-Naples_-_Italy_%2814849895827%29.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Naples_-_Italy_%2814849895827%29.jpg/1280px-Naples_-_Italy_%2814849895827%29.jpg 1280w',
    alt: 'Un étal de poissons et de coquillages installé dans la rue',
    caption: 'Poissonnerie de rue, Naples',
    author: 'Rodrigo Silva',
    license: 'CC BY 2.0',
    page: 'https://commons.wikimedia.org/wiki/File:Naples_-_Italy_(14849895827).jpg',
  },
  {
    id: 'naples-6',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Pignasecca_market%2C_Naples_20230622_01.jpg/1280px-Pignasecca_market%2C_Naples_20230622_01.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Pignasecca_market%2C_Naples_20230622_01.jpg/960px-Pignasecca_market%2C_Naples_20230622_01.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Pignasecca_market%2C_Naples_20230622_01.jpg/1280px-Pignasecca_market%2C_Naples_20230622_01.jpg 1280w',
    alt: 'Les bacs et les passants du marché de la Pignasecca',
    caption: 'Marché de la Pignasecca, Naples',
    author: 'Argo Navis',
    license: 'CC BY-SA 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:Pignasecca_market,_Naples_20230622_01.jpg',
  },
];

const MARRAKECH: Photo[] = [
  {
    id: 'marrakech-1',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Place_Jemaa_el-Fna_-_Aicha_n%C2%B01_-_Marrakech_-_Morocco_-_Maroc_-_Maroko_-_%CE%9C%CE%B1%CF%81%CF%8C%CE%BA%CE%BF_-_Fas_-_Marruecos_-_Marokko_-_%D0%9C%D0%B0%D1%80%D0%BE%D0%BA%D0%BA_picture_image_photo_%289123946665%29.jpg/1280px-thumbnail.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Place_Jemaa_el-Fna_-_Aicha_n%C2%B01_-_Marrakech_-_Morocco_-_Maroc_-_Maroko_-_%CE%9C%CE%B1%CF%81%CF%8C%CE%BA%CE%BF_-_Fas_-_Marruecos_-_Marokko_-_%D0%9C%D0%B0%D1%80%D0%BE%D0%BA%D0%BA_picture_image_photo_%289123946665%29.jpg/960px-thumbnail.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Place_Jemaa_el-Fna_-_Aicha_n%C2%B01_-_Marrakech_-_Morocco_-_Maroc_-_Maroko_-_%CE%9C%CE%B1%CF%81%CF%8C%CE%BA%CE%BF_-_Fas_-_Marruecos_-_Marokko_-_%D0%9C%D0%B0%D1%80%D0%BE%D0%BA%D0%BA_picture_image_photo_%289123946665%29.jpg/1280px-thumbnail.jpg 1280w',
    alt: 'Un vendeur derrière son étal de nourriture fumant, sur la place Jemaa el-Fna',
    caption: 'Jemaa el-Fna, Marrakech',
    author: 'Grand Parc - Bordeaux, France from France',
    license: 'CC BY 2.0',
    page: 'https://commons.wikimedia.org/wiki/File:Place_Jemaa_el-Fna_-_Aicha_n%C2%B01_-_Marrakech_-_Morocco_-_Maroc_-_Maroko_-_%CE%9C%CE%B1%CF%81%CF%8C%CE%BA%CE%BF_-_Fas_-_Marruecos_-_Marokko_-_%D0%9C%D0%B0%D1%80%D0%BE%D0%BA%D0%BA_picture_image_photo_(9123946665).jpg',
  },
  {
    id: 'marrakech-0',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Marrakech_souk_fruit_vendor.jpg/1280px-Marrakech_souk_fruit_vendor.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Marrakech_souk_fruit_vendor.jpg/960px-Marrakech_souk_fruit_vendor.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Marrakech_souk_fruit_vendor.jpg/1280px-Marrakech_souk_fruit_vendor.jpg 1280w',
    alt: 'Un vendeur de fruits arrange ses étals dans une allée du souk',
    caption: 'Souk, Marrakech',
    author: 'Mustang Joe',
    license: 'CC0',
    page: 'https://commons.wikimedia.org/wiki/File:Marrakech_souk_fruit_vendor.jpg',
  },
  {
    id: 'marrakech-7',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Artisan_in_Marrakech_%2854242645726%29.jpg/1280px-Artisan_in_Marrakech_%2854242645726%29.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Artisan_in_Marrakech_%2854242645726%29.jpg/960px-Artisan_in_Marrakech_%2854242645726%29.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Artisan_in_Marrakech_%2854242645726%29.jpg/1280px-Artisan_in_Marrakech_%2854242645726%29.jpg 1280w',
    alt: 'Un artisan travaille assis devant son atelier, dans une ruelle du souk',
    caption: 'Artisan du souk, Marrakech',
    author: 'Jorge Franganillo',
    license: 'CC BY 2.0',
    page: 'https://commons.wikimedia.org/wiki/File:Artisan_in_Marrakech_(54242645726).jpg',
  },
  {
    id: 'marrakech-13',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Amal_Women%27s_Training_Center_and_Moroccan_Restaurant_trainee_making_bread.jpg/1280px-Amal_Women%27s_Training_Center_and_Moroccan_Restaurant_trainee_making_bread.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Amal_Women%27s_Training_Center_and_Moroccan_Restaurant_trainee_making_bread.jpg/960px-Amal_Women%27s_Training_Center_and_Moroccan_Restaurant_trainee_making_bread.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Amal_Women%27s_Training_Center_and_Moroccan_Restaurant_trainee_making_bread.jpg/1280px-Amal_Women%27s_Training_Center_and_Moroccan_Restaurant_trainee_making_bread.jpg 1280w',
    alt: 'Une formatrice façonne des ghoriba dans la cuisine d’un centre de formation',
    caption: 'Centre de formation Amal, Marrakech',
    author: 'Rystheguy',
    license: 'CC BY-SA 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:Amal_Women%27s_Training_Center_and_Moroccan_Restaurant_trainee_making_bread.jpg',
  },
  {
    id: 'marrakech-14',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Berber_family-drinking_tea-Atlas.JPG/1280px-Berber_family-drinking_tea-Atlas.JPG',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Berber_family-drinking_tea-Atlas.JPG/960px-Berber_family-drinking_tea-Atlas.JPG 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Berber_family-drinking_tea-Atlas.JPG/1280px-Berber_family-drinking_tea-Atlas.JPG 1280w',
    alt: 'Une famille amazighe prend le thé, assise à même le sol',
    caption: 'Haut Atlas, près de Marrakech',
    author: 'Tonkie',
    license: 'CC BY-SA 3.0',
    page: 'https://commons.wikimedia.org/wiki/File:Berber_family-drinking_tea-Atlas.JPG',
  },
];

const TUNIS: Photo[] = [
  {
    id: 'tunis-8',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Tawleh_Players_03.jpg/1280px-Tawleh_Players_03.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Tawleh_Players_03.jpg/960px-Tawleh_Players_03.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Tawleh_Players_03.jpg/1280px-Tawleh_Players_03.jpg 1280w',
    alt: 'Trois hommes jouent au tawla sur une table de café',
    caption: 'Joueurs de tawla, Tunisie',
    author: 'Monaam Ben Fredj',
    license: 'CC BY-SA 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:Tawleh_Players_03.jpg',
  },
  {
    id: 'tunis-13',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Traditional_bakery%2C_fresh_bread_from_the_bakery_in_Hergla%2C_%2CTunisia.jpg/1280px-Traditional_bakery%2C_fresh_bread_from_the_bakery_in_Hergla%2C_%2CTunisia.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Traditional_bakery%2C_fresh_bread_from_the_bakery_in_Hergla%2C_%2CTunisia.jpg/960px-Traditional_bakery%2C_fresh_bread_from_the_bakery_in_Hergla%2C_%2CTunisia.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Traditional_bakery%2C_fresh_bread_from_the_bakery_in_Hergla%2C_%2CTunisia.jpg/1280px-Traditional_bakery%2C_fresh_bread_from_the_bakery_in_Hergla%2C_%2CTunisia.jpg 1280w',
    alt: 'Un boulanger sort ses plaques de pâtisseries du four',
    caption: 'Boulangerie de quartier, Hergla, Tunisie',
    author: 'Faiza affes',
    license: 'CC BY-SA 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:Traditional_bakery,_fresh_bread_from_the_bakery_in_Hergla,_,Tunisia.jpg',
  },
  {
    id: 'tunis-4',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Melons_in_Tunis_Central_Market.jpg/1280px-Melons_in_Tunis_Central_Market.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Melons_in_Tunis_Central_Market.jpg/960px-Melons_in_Tunis_Central_Market.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Melons_in_Tunis_Central_Market.jpg/1280px-Melons_in_Tunis_Central_Market.jpg 1280w',
    alt: 'Des marchands empilent des melons sur les étals du marché central',
    caption: 'Marché central, Tunis',
    author: 'Alexandre Moreau',
    license: 'CC BY-SA 2.0',
    page: 'https://commons.wikimedia.org/wiki/File:Melons_in_Tunis_Central_Market.jpg',
  },
  {
    id: 'tunis-5',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Tunis_street_market%2C_candy_seller.jpg/1280px-Tunis_street_market%2C_candy_seller.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Tunis_street_market%2C_candy_seller.jpg/960px-Tunis_street_market%2C_candy_seller.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Tunis_street_market%2C_candy_seller.jpg/1280px-Tunis_street_market%2C_candy_seller.jpg 1280w',
    alt: 'Un vendeur en chéchia prépare ses confiseries sur un étal de rue',
    caption: 'Marché de rue, Tunis',
    author: 'Faiza affes',
    license: 'CC BY-SA 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:Tunis_street_market,_candy_seller.jpg',
  },
  {
    id: 'tunis-6',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Vendeur_de_l%C3%A9gumes.jpg/1280px-Vendeur_de_l%C3%A9gumes.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Vendeur_de_l%C3%A9gumes.jpg/960px-Vendeur_de_l%C3%A9gumes.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Vendeur_de_l%C3%A9gumes.jpg/1280px-Vendeur_de_l%C3%A9gumes.jpg 1280w',
    alt: 'Un client choisit ses légumes sur un marché de quartier',
    caption: 'Marché de quartier, Tunis',
    author: 'Noomen9',
    license: 'CC BY-SA 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:Vendeur_de_l%C3%A9gumes.jpg',
  },
];

const KYOTO: Photo[] = [
  {
    id: 'kyoto-11',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Oden_stall_at_the_market_of_Toji_by_MissionControl.jpg/1280px-Oden_stall_at_the_market_of_Toji_by_MissionControl.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Oden_stall_at_the_market_of_Toji_by_MissionControl.jpg/960px-Oden_stall_at_the_market_of_Toji_by_MissionControl.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Oden_stall_at_the_market_of_Toji_by_MissionControl.jpg/1280px-Oden_stall_at_the_market_of_Toji_by_MissionControl.jpg 1280w',
    alt: 'Un vendeur sert des brochettes d’oden derrière son stand de marché',
    caption: 'Marché de Tōji, Kyoto',
    author: 'MissionControl from Market at Buddhist temple Toji in Minami, Kyoto',
    license: 'CC BY-SA 2.0',
    page: 'https://commons.wikimedia.org/wiki/File:Oden_stall_at_the_market_of_Toji_by_MissionControl.jpg',
  },
  {
    id: 'kyoto-1',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Nishiki_ichiba_Kyoto_JPN.jpg/1280px-Nishiki_ichiba_Kyoto_JPN.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Nishiki_ichiba_Kyoto_JPN.jpg/960px-Nishiki_ichiba_Kyoto_JPN.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Nishiki_ichiba_Kyoto_JPN.jpg/1280px-Nishiki_ichiba_Kyoto_JPN.jpg 1280w',
    alt: 'Les allées du marché de Nishiki, pleines de clients en fin d’année',
    caption: 'Marché de Nishiki, Kyoto',
    author: 'ignis',
    license: 'CC BY-SA 3.0',
    page: 'https://commons.wikimedia.org/wiki/File:Nishiki_ichiba_Kyoto_JPN.jpg',
  },
  {
    id: 'kyoto-10',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Kyoto_Gion_Matsuri_J09_093.jpg/1280px-Kyoto_Gion_Matsuri_J09_093.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Kyoto_Gion_Matsuri_J09_093.jpg/960px-Kyoto_Gion_Matsuri_J09_093.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Kyoto_Gion_Matsuri_J09_093.jpg/1280px-Kyoto_Gion_Matsuri_J09_093.jpg 1280w',
    alt: 'Un enfant en kamishimo attend le départ du cortège du Gion Matsuri',
    caption: 'Gion Matsuri, Kyoto',
    author: 'Corpse Reviver',
    license: 'CC BY 3.0',
    page: 'https://commons.wikimedia.org/wiki/File:Kyoto_Gion_Matsuri_J09_093.jpg',
  },
  {
    id: 'kyoto-2',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Nishiki_market_Kyoto_hdsr_2019_06_02_9999_31.jpg/1280px-Nishiki_market_Kyoto_hdsr_2019_06_02_9999_31.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Nishiki_market_Kyoto_hdsr_2019_06_02_9999_31.jpg/960px-Nishiki_market_Kyoto_hdsr_2019_06_02_9999_31.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Nishiki_market_Kyoto_hdsr_2019_06_02_9999_31.jpg/1280px-Nishiki_market_Kyoto_hdsr_2019_06_02_9999_31.jpg 1280w',
    alt: 'L’étalage d’un poissonnier du marché de Nishiki',
    caption: 'Marché de Nishiki, Kyoto',
    author: 'Hyppolyte de Saint-Rambert',
    license: 'CC BY-SA 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:Nishiki_market_Kyoto_hdsr_2019_06_02_9999_31.jpg',
  },
  {
    id: 'kyoto-3',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Tsukemono_shop_by_collinox_in_Nishiki_Ichiba%2C_Kyoto.jpg/1280px-Tsukemono_shop_by_collinox_in_Nishiki_Ichiba%2C_Kyoto.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Tsukemono_shop_by_collinox_in_Nishiki_Ichiba%2C_Kyoto.jpg/960px-Tsukemono_shop_by_collinox_in_Nishiki_Ichiba%2C_Kyoto.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Tsukemono_shop_by_collinox_in_Nishiki_Ichiba%2C_Kyoto.jpg/1280px-Tsukemono_shop_by_collinox_in_Nishiki_Ichiba%2C_Kyoto.jpg 1280w',
    alt: 'La devanture d’une boutique de tsukemono du marché de Nishiki',
    caption: 'Boutique de tsukemono, Kyoto',
    author: 'collinox',
    license: 'CC BY 2.0',
    page: 'https://commons.wikimedia.org/wiki/File:Tsukemono_shop_by_collinox_in_Nishiki_Ichiba,_Kyoto.jpg',
  },
];

const CHIANG_MAI: Photo[] = [
  {
    id: 'chiang-mai-1',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/2014_11_Street_food_stall_Chiang_Mai.jpg/1280px-2014_11_Street_food_stall_Chiang_Mai.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/2014_11_Street_food_stall_Chiang_Mai.jpg/960px-2014_11_Street_food_stall_Chiang_Mai.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/2014_11_Street_food_stall_Chiang_Mai.jpg/1280px-2014_11_Street_food_stall_Chiang_Mai.jpg 1280w',
    alt: 'Un stand de cuisine de rue entouré de clients, le soir',
    caption: 'Cuisine de rue, Chiang Mai',
    author: 'Takeaway',
    license: 'CC BY-SA 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:2014_11_Street_food_stall_Chiang_Mai.jpg',
  },
  {
    id: 'chiang-mai-5',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Street_Food_Stall%2C_Chiang_Mai%2C_Thailand_%287113967189%29.jpg/1280px-Street_Food_Stall%2C_Chiang_Mai%2C_Thailand_%287113967189%29.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Street_Food_Stall%2C_Chiang_Mai%2C_Thailand_%287113967189%29.jpg/960px-Street_Food_Stall%2C_Chiang_Mai%2C_Thailand_%287113967189%29.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Street_Food_Stall%2C_Chiang_Mai%2C_Thailand_%287113967189%29.jpg/1280px-Street_Food_Stall%2C_Chiang_Mai%2C_Thailand_%287113967189%29.jpg 1280w',
    alt: 'Une vendeuse prépare des brochettes derrière son étal de rue',
    caption: 'Étal de rue, Chiang Mai',
    author: 'David McKelvey from Brisbane, Australia',
    license: 'CC BY 2.0',
    page: 'https://commons.wikimedia.org/wiki/File:Street_Food_Stall,_Chiang_Mai,_Thailand_(7113967189).jpg',
  },
  {
    id: 'chiang-mai-9',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/NYE%2C_Chiang_Mai_markets_%2811900177053%29.jpg/1280px-NYE%2C_Chiang_Mai_markets_%2811900177053%29.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/NYE%2C_Chiang_Mai_markets_%2811900177053%29.jpg/960px-NYE%2C_Chiang_Mai_markets_%2811900177053%29.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/NYE%2C_Chiang_Mai_markets_%2811900177053%29.jpg/1280px-NYE%2C_Chiang_Mai_markets_%2811900177053%29.jpg 1280w',
    alt: 'La foule et les lampes d’un marché de nuit de Chiang Mai',
    caption: 'Marché de nuit, Chiang Mai',
    author: 'Andrea Schaffer from Sydney, Australia',
    license: 'CC BY 2.0',
    page: 'https://commons.wikimedia.org/wiki/File:NYE,_Chiang_Mai_markets_(11900177053).jpg',
  },
  {
    id: 'chiang-mai-14',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/2014_1204_Khao_soi_restaurant.jpg/1280px-2014_1204_Khao_soi_restaurant.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/2014_1204_Khao_soi_restaurant.jpg/960px-2014_1204_Khao_soi_restaurant.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/2014_1204_Khao_soi_restaurant.jpg/1280px-2014_1204_Khao_soi_restaurant.jpg 1280w',
    alt: 'L’intérieur d’une gargote à khao soi, tabourets bas et clients au comptoir',
    caption: 'Gargote à khao soi, Chiang Mai',
    author: 'Takeaway',
    license: 'CC BY-SA 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:2014_1204_Khao_soi_restaurant.jpg',
  },
  {
    id: 'chiang-mai-13',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/2014_1204_Khao_Soi_in_Chiang_Mai.jpg/1280px-2014_1204_Khao_Soi_in_Chiang_Mai.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/2014_1204_Khao_Soi_in_Chiang_Mai.jpg/960px-2014_1204_Khao_Soi_in_Chiang_Mai.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/2014_1204_Khao_Soi_in_Chiang_Mai.jpg/1280px-2014_1204_Khao_Soi_in_Chiang_Mai.jpg 1280w',
    alt: 'Un bol de khao soi au poulet, le curry de nouilles du Nord thaï',
    caption: 'Khao soi, Chiang Mai',
    author: 'Takeaway',
    license: 'CC BY-SA 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:2014_1204_Khao_Soi_in_Chiang_Mai.jpg',
  },
];

const UBUD: Photo[] = [
  {
    id: 'ubud-8',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Traditional_Farmer.jpg/1280px-Traditional_Farmer.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Traditional_Farmer.jpg/960px-Traditional_Farmer.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Traditional_Farmer.jpg/1280px-Traditional_Farmer.jpg 1280w',
    alt: 'Un paysan laboure sa rizière avec un attelage de bovins, au crépuscule',
    caption: 'Labour traditionnel « matekap », Bali',
    author: 'Surya Edy Gautama',
    license: 'CC BY-SA 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:Traditional_Farmer.jpg',
  },
  {
    id: 'ubud-5',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Balinese-woman-teaching-canang-marklchaves.jpg/1280px-Balinese-woman-teaching-canang-marklchaves.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Balinese-woman-teaching-canang-marklchaves.jpg/960px-Balinese-woman-teaching-canang-marklchaves.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Balinese-woman-teaching-canang-marklchaves.jpg/1280px-Balinese-woman-teaching-canang-marklchaves.jpg 1280w',
    alt: 'Une Balinaise montre à des visiteurs comment tresser une offrande canang sari',
    caption: 'Apprentissage des canang sari, Bali',
    author: 'Marklchaves',
    license: 'CC BY-SA 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:Balinese-woman-teaching-canang-marklchaves.jpg',
  },
  {
    id: 'ubud-4',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Ubud_Market%2C_Ubud%2C_Bali_%2815009558597%29.jpg/1280px-Ubud_Market%2C_Ubud%2C_Bali_%2815009558597%29.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Ubud_Market%2C_Ubud%2C_Bali_%2815009558597%29.jpg/960px-Ubud_Market%2C_Ubud%2C_Bali_%2815009558597%29.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Ubud_Market%2C_Ubud%2C_Bali_%2815009558597%29.jpg/1280px-Ubud_Market%2C_Ubud%2C_Bali_%2815009558597%29.jpg 1280w',
    alt: 'Des passants et des enfants dans la rue du marché d’Ubud',
    caption: 'Marché d’Ubud, Bali',
    author: 'Fabio Achilli from Milano, Italy',
    license: 'CC BY 2.0',
    page: 'https://commons.wikimedia.org/wiki/File:Ubud_Market,_Ubud,_Bali_(15009558597).jpg',
  },
  {
    id: 'ubud-13',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Bali%2C_gamelan_player_2.jpg/1280px-Bali%2C_gamelan_player_2.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Bali%2C_gamelan_player_2.jpg/960px-Bali%2C_gamelan_player_2.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Bali%2C_gamelan_player_2.jpg/1280px-Bali%2C_gamelan_player_2.jpg 1280w',
    alt: 'Les mains d’un musicien sur les lames de bambou d’un calung',
    caption: 'Gamelan, Bali',
    author: 'Schnobby',
    license: 'CC BY-SA 3.0',
    page: 'https://commons.wikimedia.org/wiki/File:Bali,_gamelan_player_2.jpg',
  },
  {
    id: 'ubud-10',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Stocks-3291_%2844325885254%29.jpg/1280px-Stocks-3291_%2844325885254%29.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Stocks-3291_%2844325885254%29.jpg/960px-Stocks-3291_%2844325885254%29.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Stocks-3291_%2844325885254%29.jpg/1280px-Stocks-3291_%2844325885254%29.jpg 1280w',
    alt: 'Des villageois rassemblés pour une cérémonie de village',
    caption: 'Cérémonie de village, Bali',
    author: 'Artem Beliaikin from Moscow, Russia',
    license: 'CC0',
    page: 'https://commons.wikimedia.org/wiki/File:Stocks-3291_(44325885254).jpg',
  },
];

const MEDELLIN: Photo[] = [
  {
    id: 'medellin-20',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Dancing_crew_near_the_ball_court_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024_%283%29.jpg/1280px-Dancing_crew_near_the_ball_court_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024_%283%29.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Dancing_crew_near_the_ball_court_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024_%283%29.jpg/960px-Dancing_crew_near_the_ball_court_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024_%283%29.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Dancing_crew_near_the_ball_court_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024_%283%29.jpg/1280px-Dancing_crew_near_the_ball_court_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024_%283%29.jpg 1280w',
    alt: 'Des danseurs improvisent devant un mur peint, entourés d’habitants',
    caption: 'Comuna 13, Medellín',
    author: 'José Luiz',
    license: 'CC BY-SA 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:Dancing_crew_near_the_ball_court_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024_(3).jpg',
  },
  {
    id: 'medellin-23',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Entrance_%28Carrera_109%29_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024.jpg/1280px-Entrance_%28Carrera_109%29_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Entrance_%28Carrera_109%29_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024.jpg/960px-Entrance_%28Carrera_109%29_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Entrance_%28Carrera_109%29_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024.jpg/1280px-Entrance_%28Carrera_109%29_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024.jpg 1280w',
    alt: 'L’entrée de la Comuna 13, sa rue commerçante et ses fanions',
    caption: 'Entrée de la Comuna 13, Medellín',
    author: 'José Luiz',
    license: 'CC BY-SA 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:Entrance_(Carrera_109)_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024.jpg',
  },
  {
    id: 'medellin-27',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Graffitour%2C_Medell%C3%ADn_06.jpg/1280px-Graffitour%2C_Medell%C3%ADn_06.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Graffitour%2C_Medell%C3%ADn_06.jpg/960px-Graffitour%2C_Medell%C3%ADn_06.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Graffitour%2C_Medell%C3%ADn_06.jpg/1280px-Graffitour%2C_Medell%C3%ADn_06.jpg 1280w',
    alt: 'Des habitants et des visiteurs dans les escaliers peints du quartier',
    caption: 'Comuna 13, Medellín',
    author: 'XalD',
    license: 'CC BY-SA 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:Graffitour,_Medell%C3%ADn_06.jpg',
  },
  {
    id: 'medellin-12',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Ball_court_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024.jpg/1280px-Ball_court_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Ball_court_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024.jpg/960px-Ball_court_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Ball_court_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024.jpg/1280px-Ball_court_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024.jpg 1280w',
    alt: 'Le terrain de sport du quartier, en bas des immeubles',
    caption: 'Comuna 13, Medellín',
    author: 'Jbribeiro1',
    license: 'CC BY-SA 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:Ball_court_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024.jpg',
  },
  {
    id: 'medellin-18',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Comuna_13%2C_Medell%C3%ADn_04.jpg/1280px-Comuna_13%2C_Medell%C3%ADn_04.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Comuna_13%2C_Medell%C3%ADn_04.jpg/960px-Comuna_13%2C_Medell%C3%ADn_04.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Comuna_13%2C_Medell%C3%ADn_04.jpg/1280px-Comuna_13%2C_Medell%C3%ADn_04.jpg 1280w',
    alt: 'Les maisons de brique de la Comuna 13, accrochées à la pente',
    caption: 'Comuna 13 — San Javier, Medellín',
    author: 'Bernard Gagnon',
    license: 'CC BY-SA 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:Comuna_13,_Medell%C3%ADn_04.jpg',
  },
];

const CUSCO: Photo[] = [
  {
    id: 'cusco-26',
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Ccaccaccollo_Weavers.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Ccaccaccollo_Weavers.jpg/960px-Ccaccaccollo_Weavers.jpg 640w, https://upload.wikimedia.org/wikipedia/commons/6/6e/Ccaccaccollo_Weavers.jpg 1280w',
    alt: 'Des tisseuses présentent leurs pièces, assises à même le sol',
    caption: 'Tisseuses de Ccaccaccollo, région de Cusco',
    author: 'Kevin Gabbert - User: (WT-shared) Kevin James at  wts wikivoyage',
    license: 'CC BY-SA 3.0',
    page: 'https://commons.wikimedia.org/wiki/File:Ccaccaccollo_Weavers.jpg',
  },
  {
    id: 'cusco-3',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/San_Pedro_Market_in_Cusco%2C_Peru.jpg/1280px-San_Pedro_Market_in_Cusco%2C_Peru.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/San_Pedro_Market_in_Cusco%2C_Peru.jpg/960px-San_Pedro_Market_in_Cusco%2C_Peru.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/San_Pedro_Market_in_Cusco%2C_Peru.jpg/1280px-San_Pedro_Market_in_Cusco%2C_Peru.jpg 1280w',
    alt: 'Les étals et les clients du marché de San Pedro',
    caption: 'Marché de San Pedro, Cusco',
    author: 'Ashim D’Silva',
    license: 'CC0',
    page: 'https://commons.wikimedia.org/wiki/File:San_Pedro_Market_in_Cusco,_Peru.jpg',
  },
  {
    id: 'cusco-37',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Calca_Peru-_Quinoa_seller_at_mercado.jpg/1280px-Calca_Peru-_Quinoa_seller_at_mercado.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Calca_Peru-_Quinoa_seller_at_mercado.jpg/960px-Calca_Peru-_Quinoa_seller_at_mercado.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Calca_Peru-_Quinoa_seller_at_mercado.jpg/1280px-Calca_Peru-_Quinoa_seller_at_mercado.jpg 1280w',
    alt: 'Une marchande de quinoa derrière son étal du marché couvert',
    caption: 'Marché de Calca, vallée de Cusco',
    author: 'Thayne Tuason',
    license: 'CC BY 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:Calca_Peru-_Quinoa_seller_at_mercado.jpg',
  },
  {
    id: 'cusco-35',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Calca_Peru-_Cheese_seller_in_mercado.jpg/1280px-Calca_Peru-_Cheese_seller_in_mercado.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Calca_Peru-_Cheese_seller_in_mercado.jpg/960px-Calca_Peru-_Cheese_seller_in_mercado.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Calca_Peru-_Cheese_seller_in_mercado.jpg/1280px-Calca_Peru-_Cheese_seller_in_mercado.jpg 1280w',
    alt: 'Une vendeuse de fromages derrière son étal du marché',
    caption: 'Marché de Calca, vallée de Cusco',
    author: 'Thayne Tuason',
    license: 'CC BY 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:Calca_Peru-_Cheese_seller_in_mercado.jpg',
  },
  {
    id: 'cusco-19',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Brass%2C_Cuzco_%287195616686%29.jpg/1280px-Brass%2C_Cuzco_%287195616686%29.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Brass%2C_Cuzco_%287195616686%29.jpg/960px-Brass%2C_Cuzco_%287195616686%29.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Brass%2C_Cuzco_%287195616686%29.jpg/1280px-Brass%2C_Cuzco_%287195616686%29.jpg 1280w',
    alt: 'Des musiciens jouent du cuivre dans une rue de Cusco',
    caption: 'Musiciens de rue, Cusco',
    author: 'Rod Waddington from Kergunyah, Australia',
    license: 'CC BY-SA 2.0',
    page: 'https://commons.wikimedia.org/wiki/File:Brass,_Cuzco_(7195616686).jpg',
  },
];

const SALVADOR: Photo[] = [
  {
    id: 'salvador-8',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Baiana-acaraj%C3%A9-Salvador.jpg/1280px-Baiana-acaraj%C3%A9-Salvador.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Baiana-acaraj%C3%A9-Salvador.jpg/960px-Baiana-acaraj%C3%A9-Salvador.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Baiana-acaraj%C3%A9-Salvador.jpg/1280px-Baiana-acaraj%C3%A9-Salvador.jpg 1280w',
    alt: 'Une baiana prépare ses acarajés derrière son étal de rue',
    caption: 'Baiana d’acarajé, Salvador de Bahia',
    author: 'Rodrigues Pozzebom',
    license: 'CC BY 3.0 br',
    page: 'https://commons.wikimedia.org/wiki/File:Baiana-acaraj%C3%A9-Salvador.jpg',
  },
  {
    id: 'salvador-11',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/I_Encontro_das_Culturas_Negras_na_Bahia.jpg/1280px-I_Encontro_das_Culturas_Negras_na_Bahia.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/I_Encontro_das_Culturas_Negras_na_Bahia.jpg/960px-I_Encontro_das_Culturas_Negras_na_Bahia.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/I_Encontro_das_Culturas_Negras_na_Bahia.jpg/1280px-I_Encontro_das_Culturas_Negras_na_Bahia.jpg 1280w',
    alt: 'Une roda de capoeira se forme, les joueurs en blanc au centre',
    caption: 'Roda de capoeira, Bahia',
    author: 'Turismo Bahia',
    license: 'CC BY-SA 2.0',
    page: 'https://commons.wikimedia.org/wiki/File:I_Encontro_das_Culturas_Negras_na_Bahia.jpg',
  },
  {
    id: 'salvador-6',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Acaraj%C3%A9_-_A_baiana_do_Acaraj%C3%A9_Claudia_Baiana.jpg/1280px-Acaraj%C3%A9_-_A_baiana_do_Acaraj%C3%A9_Claudia_Baiana.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Acaraj%C3%A9_-_A_baiana_do_Acaraj%C3%A9_Claudia_Baiana.jpg/960px-Acaraj%C3%A9_-_A_baiana_do_Acaraj%C3%A9_Claudia_Baiana.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Acaraj%C3%A9_-_A_baiana_do_Acaraj%C3%A9_Claudia_Baiana.jpg/1280px-Acaraj%C3%A9_-_A_baiana_do_Acaraj%C3%A9_Claudia_Baiana.jpg 1280w',
    alt: 'Une femme en tenue blanche fait frire des acarajés sous son auvent',
    caption: 'Baiana d’acarajé, Bahia',
    author: 'Fonseca001',
    license: 'Public domain',
    page: 'https://commons.wikimedia.org/wiki/File:Acaraj%C3%A9_-_A_baiana_do_Acaraj%C3%A9_Claudia_Baiana.jpg',
  },
  {
    id: 'salvador-9',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Baianas_do_Acaraj%C3%A9.jpg/1280px-Baianas_do_Acaraj%C3%A9.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Baianas_do_Acaraj%C3%A9.jpg/960px-Baianas_do_Acaraj%C3%A9.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Baianas_do_Acaraj%C3%A9.jpg/1280px-Baianas_do_Acaraj%C3%A9.jpg 1280w',
    alt: 'Trois baianas tiennent leur étal de cuisine de rue',
    caption: 'Cuisine de rue bahianaise',
    author: 'DiegoL569',
    license: 'CC BY-SA 4.0',
    page: 'https://commons.wikimedia.org/wiki/File:Baianas_do_Acaraj%C3%A9.jpg',
  },
  {
    id: 'salvador-14',
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Roda_de_Capoeira.._Cachoeira_-Ba_Foto-_Erica_Almeida_-_Setur_%287755008860%29.jpg/1280px-Roda_de_Capoeira.._Cachoeira_-Ba_Foto-_Erica_Almeida_-_Setur_%287755008860%29.jpg',
    srcset:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Roda_de_Capoeira.._Cachoeira_-Ba_Foto-_Erica_Almeida_-_Setur_%287755008860%29.jpg/960px-Roda_de_Capoeira.._Cachoeira_-Ba_Foto-_Erica_Almeida_-_Setur_%287755008860%29.jpg 640w, https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Roda_de_Capoeira.._Cachoeira_-Ba_Foto-_Erica_Almeida_-_Setur_%287755008860%29.jpg/1280px-Roda_de_Capoeira.._Cachoeira_-Ba_Foto-_Erica_Almeida_-_Setur_%287755008860%29.jpg 1280w',
    alt: 'Des enfants en tenue blanche attendent leur tour autour d’une roda',
    caption: 'École de capoeira, Cachoeira, Bahia',
    author: 'Turismo Bahia',
    license: 'CC BY-SA 2.0',
    page: 'https://commons.wikimedia.org/wiki/File:Roda_de_Capoeira.._Cachoeira_-Ba_Foto-_Erica_Almeida_-_Setur_(7755008860).jpg',
  },
];

export const PHOTOS: Record<string, Photo[]> = {
  'marseille': MARSEILLE,
  'naples': NAPLES,
  'marrakech': MARRAKECH,
  'tunis': TUNIS,
  'kyoto': KYOTO,
  'chiang-mai': CHIANG_MAI,
  'ubud': UBUD,
  'medellin': MEDELLIN,
  'cusco': CUSCO,
  'salvador': SALVADOR,
};

/** Les trois photographies du hero, en fondu lent. */
export const HERO_ROTATION: Photo[] = [
  PHOTOS['marrakech'][0],
  PHOTOS['ubud'][0],
  PHOTOS['salvador'][1],
];

export const photosOf = (slug: string): Photo[] => PHOTOS[slug] ?? [];

/** La couverture d'une ville : carte de destination, hero de page, sections. */
export const coverOf = (slug: string): Photo => photosOf(slug)[0] ?? HERO_ROTATION[0];

/** Toutes les images, pour les crédits et les vérifications de liens. */
export const ALL_PHOTOS: Photo[] = Object.values(PHOTOS).flat();
