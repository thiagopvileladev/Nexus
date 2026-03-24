document.getElementById('infoButton').inert = true

const catalogo_ps1 = [
    {
        'id': '1',
        'titulo': 'Final Fantasy IX',
        "desc": "O ladrão Zidane Tribal e a trupe de teatro Tantalus sequestram a Princesa Garnet de Alexandria, apenas para descobrir que a jovem desejava escapar de sua vida real. Em uma jornada épica que retorna às raízes da fantasia clássica, eles devem unir forças com aliados improváveis para impedir que uma força sombria consuma o mundo de Gaia em uma guerra devastadora e eterna.",
        "capa": "covers/covers_ps1/final-fantasy-ix.avif",
        "logo": "play_game_logos/Final_Fantasy_IX_Logo.png",
        "background": "backgrounds/FFIX-00023-Final-Fantasy-Title-Screen.png",
        "hours": "40h",
        "year": "2000",
        'rate': '9.2/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Final Fantasy IX (USA) (Disc 1).chd",
        'nome': 'Final Fantasy IX (USA) (Disc 1).chd',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card1')
    },
    {
        'id': '2',
        'titulo': 'Tomb Raider',
        "desc": "A destemida arqueóloga Lara Croft é contratada para recuperar as peças de um antigo artefato conhecido como o Scion. Atravessando tumbas perigosas e civilizações perdidas no Peru, Grécia e Egito, ela deve usar sua inteligência, acrobacias e habilidades de combate para sobreviver a armadilhas mortais e criaturas selvagens enquanto desvenda uma conspiração milenar e perigosa.",
        "capa": "covers/covers_ps1/tomb-raider.png",
        "logo": "play_game_logos/Tomb_Raider_Underworld_Logo.png",
        "background": "backgrounds/54252136597_4d7b7c5adb_4k.jpg",
        "hours": "15h",
        "year": "1996",
        'rate': '8.1/',
        "rateGray": '<span class="rateGray" id="rateGray2">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Tomb Raider (USA).chd",
        'nome': 'Tomb Raider (USA).chd',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card2')
    },
    {
        'id': '3',
        'titulo': 'Metal Gear Solid',
        "desc": "O soldado lendário Solid Snake é infiltrado em uma instalação de descarte nuclear em Shadow Moses para neutralizar a unidade terrorista FOXHOUND. Ele precisa resgatar reféns e impedir o lançamento de uma arma nuclear devastadora conhecida como Metal Gear Rex, enfrentando chefes carismáticos e questionando sua própria natureza em uma trama de espionagem tática cinematográfica.",
        "capa": "covers/covers_ps1/Metal_Gear_Solid_-_North-american_cover.jpg",
        "logo": "play_game_logos/Metal_Gear_Solid_logo.png",
        "background": "backgrounds/Metal-Gear-Solid-Banner.jpeg",
        "hours": "12h",
        "year": "1998",
        'rate': '9.4/',
        "rateGray": '<span class="rateGray" id="rateGray3">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Metal Gear Solid (USA) (Disc 1).chd",
        'nome': 'Metal Gear Solid (USA) (Disc 1).chd',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card3')
    },
    {
        'id': '4',
        'titulo': 'Final Fantasy VIII',
        "desc": "Squall Leonhart, um cadete da elite SeeD, é arrastado para um conflito internacional quando a feiticeira Edea toma o controle da nação de Galbadia. Ao lado de seus companheiros, Squall deve superar seu isolamento emocional e viajar através do tempo e espaço para impedir que o mundo seja compactado em um futuro distópico dominado pelo medo e por magias proibidas de uma era esquecida.",
        "capa": "covers/covers_ps1/final-fantasy-viii.jpg",
        "logo": "play_game_logos/Final_Fantasy_VIII_Logo.png",
        "background": "backgrounds/rJPiW7x0JXCYsNtVsgJ9VU7m.avif",
        "hours": "42h",
        "year": "1999",
        'rate': '8.7/',
        "rateGray": '<span class="rateGray" id="rateGray4">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Final Fantasy VIII (USA) (Disc 1).chd",
        'nome': 'Final Fantasy VIII (USA) (Disc 1).chd',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card4')
    },
    {
        'id': '5',
        'titulo': 'Final Fantasy VII',
        "desc": "O mercenário Cloud Strife une-se ao grupo ecoterrorista AVALANCHE em uma luta desesperada contra a megacorporação Shinra, que está drenando a energia vital do planeta. No entanto, a ameaça de Sephiroth, um ex-soldado lendário, força Cloud a enfrentar seu passado fragmentado para salvar o destino de Gaia e de todos que ele ama de uma catástrofe vinda dos céus.",
        "capa": "covers/covers_ps1/final-fantasy-vii.jpg",
        "logo": "play_game_logos/Final-Fantasy-7-Logo.png",
        "background": "backgrounds/NXNCl23Cal5LFacqEiWwptkt.avif",
        "hours": "38h",
        "year": "1997",
        'rate': '9.3/',
        "rateGray": '<span class="rateGray" id="rateGray5">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Final Fantasy VII (USA) (Disc 1).chd",
        'nome': 'a.chd',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card5')
    },
    {
        'id': '6',
        'titulo': 'The Legend of Dragoon',
        "desc": "Dart, um jovem guerreiro em busca de vingança contra o Monstro Negro, descobre o poder ancestral dos Dragoons durante um ataque ao seu vilarejo. Com a ajuda de aliados que compartilham esse destino lendário, ele deve enfrentar um império ambicioso e impedir o renascimento de uma criatura divina que ameaça destruir toda a criação em uma narrativa repleta de traições e transformações místicas.",
        "capa": "covers/covers_ps1/the-legend-of-dragon.jpg",
        "logo": "play_game_logos/6q8h1dv9TPl5HGUJgposU2A8.avif",
        "background": "backgrounds/the-legend-of-dragoon-capa-jogoveio.jpg",
        "hours": "50h",
        "year": "1999",
        'rate': '8.8/',
        "rateGray": '<span class="rateGray" id="rateGray6">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Legend of Dragoon The (Europe) (Disc 4).chd",
        'nome': 'a2.chd',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card6')
    },
    {
        'id': '7',
        'titulo': 'Resident Evil 2',
        "desc": "O policial novato Leon S. Kennedy e a estudante Claire Redfield chegam a Raccoon City apenas para encontrar a cidade devastada por um surto viral que transformou a população em zumbis. Eles devem explorar o departamento de polícia, resolver enigmas complexos e sobreviver a mutantes aterrorizantes enquanto tentam escapar da cidade antes que uma conspiração da Umbrella Corporation os soterre.",
        "capa": "covers/covers_ps1/resident-evil-2.png",
        "logo": "play_game_logos/Resident_Evil_2_logo.png",
        "background": "backgrounds/acb55f9af76808c5fd5522dcdb519fde.jpg",
        "hours": "6h",
        "year": "1998",
        'rate': '9.2/',
        "rateGray": '<span class="rateGray" id="rateGray7">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card7')
    },
    {
        'id': '8',
        'titulo': 'Gran Turismo 2',
        "desc": "Prepare-se para a experiência definitiva de simulação automobilística com mais de 600 veículos e dezenas de pistas ao redor do mundo. Comece sua carreira como um piloto iniciante, conquiste licenças desafiadoras e vença campeonatos para tunar seus carros e colecionar as máquinas mais velozes da história, definindo um novo padrão para o gênero de corrida com física realista e gráficos de ponta.",
        "capa": "covers/covers_ps1/gran-turismo-2.jpg",
        "logo": "play_game_logos/Gran_Turismo_2_Logo.png",
        "background": "backgrounds/granturismo2-cover-jogoveio.jpg",
        "hours": "50h",
        "year": "1999",
        'rate': '8.9/',
        "rateGray": '<span class="rateGray" id="rateGray8">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card8')
    },
    {
        'id': '9',
        'titulo': 'Driver 2',
        "desc": "Tanner, um policial disfarçado, retorna para enfrentar uma perigosa guerra de gangues que se estende de Chicago até Havana e Rio de Janeiro. Agora com a habilidade de sair do veículo e explorar as cidades a pé, você deve realizar missões de perseguição em alta velocidade, infiltração e fuga, enquanto tenta derrubar uma organização criminosa internacional em um submundo repleto de perigos e adrenalina.",
        "capa": "covers/covers_ps1/driver-2-back-on-the-streets.jpg",
        "logo": "play_game_logos/1818ced9b07e29bc589fff6782a4345e.png",
        "background": "backgrounds/driver2 capa.jpg",
        "hours": "14h",
        "year": "2000",
        'rate': '7.9/',
        "rateGray": '<span class="rateGray" id="rateGray9">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card9')
    },
    {
        'id': '10',
        'titulo': 'Koudelka',
        "desc": "No final do século XIX, a jovem médium Koudelka Iasant é guiada por uma força misteriosa até o sinistro Monastério de Nemeton no País de Gales. Acompanhada por um aventureiro e um bispo, ela deve desvendar os segredos de rituais proibidos e enfrentar horrores góticos em um sistema de combate tático, onde o limite entre a fé e a loucura é testado por criaturas grotescas e segredos sombrios.",
        "capa": "covers/covers_ps1/koudelka.jpg",
        "logo": "play_game_logos/Koudelka_-_Logo1.webp",
        "background": "backgrounds/hq7200.jpg",
        "hours": "10h",
        "year": "1999",
        'rate': '7.5/',
        "rateGray": '<span class="rateGray" id="rateGray10">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card10')
    },
    {
        'id': '10',
        'titulo': 'Crash Bandicoot',
        "desc": "O marsupial Crash deve resgatar Tawna e impedir os planos do Dr. Neo Cortex em uma vibrante aventura de plataforma através de ilhas tropicais perigosas.",
        "capa": "covers/covers_ps1/220px-Crash_Bandicoot_Cover.png",
        "logo": "play_game_logos/Crash_bandicoot_logo.png",
        "background": "backgrounds/crash-bandicoot-game-cover-altar-of-gaming.webp",
        "hours": "6h",
        "year": "1996",
        'rate': '8.3/',
        "rateGray": '<span class="rateGray" id="rateGray10">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card11')
    },
    {
        'id': '11',
        'titulo': 'Parasite Eve 2',
        "desc": "Aya Brea retorna para caçar criaturas mitocondriais em ambientes realistas, misturando RPG e survival horror em uma trama de conspiração biológica eletrizante.",
        "capa": "covers/covers_ps1/220px-Parasite_Eve_II_Coverart.png",
        "logo": "play_game_logos/e5db66bba654d252799d032161b7ccf5.png",
        "background": "backgrounds/parasite-eve-ii-001.webp",
        "hours": "12h",
        "year": "1999",
        'rate': '8.3/',
        "rateGray": '<span class="rateGray" id="rateGray11">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card12')
    },
    {
        'id': '12',
        'titulo': 'Tekken 3',
        "desc": "A batalha pelo punho de ferro continua com mecânicas refinadas, apresentando o despertar de Jin Kazama contra a ameaça do antigo Deus da Luta.",
        "capa": "covers/covers_ps1/Tekken-3-Playstation-PS1_ede41be8-84ec-4d5c-a375-b6dea56cfb01.00af896c50777392cecc29c75b162650.webp",
        "logo": "play_game_logos/Tekken_3.webp",
        "background": "backgrounds/U6gtuUQDQlqq2bkwxI22.webp",
        "hours": "4h",
        "year": "1998",
        'rate': '9.1/',
        "rateGray": '<span class="rateGray" id="rateGray12">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card13')
    },
    {
        'id': '13',
        'titulo': 'Medievil',
        "desc": "Sir Daniel Fortesque ganha uma segunda chance de ser um herói ao ser ressuscitado para derrotar o feiticeiro Zarok e seu exército de mortos-vivos.",
        "capa": "covers/covers_ps1/Medievil_cover.jpg",
        "logo": "play_game_logos/Medievil.webp",
        "background": "backgrounds/MediEvil-Logo-1920x1080.png",
        "hours": "8h",
        "year": "1998",
        'rate': '8.4/',
        "rateGray": '<span class="rateGray" id="rateGray13">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card14')
    },
    {
        'id': '14',
        'titulo': 'Syphon Filter 2',
        "desc": "Gabe Logan e Lian Xing tornam-se fugitivos enquanto tentam expor uma conspiração global e impedir a venda do vírus mortal Syphon Filter.",
        "capa": "covers/covers_ps1/SyphonFilter2Box.jpg",
        "logo": "play_game_logos/rBwHJ1nVBQGRqk8J0mV4F1K8.avif",
        "background": "backgrounds/468316660_10162370393935030_3888571642542129788_n.jpg",
        "hours": "11h",
        "year": "2000",
        'rate': '8.5/',
        "rateGray": '<span class="rateGray" id="rateGray14">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card15')
    },
    {
        'id': '15',
        'titulo': 'Fear Effect',
        "desc": "Mercenários buscam a filha de um magnata em um mundo cyberpunk estilizado, enfrentando tríades e horrores sobrenaturais em uma narrativa madura.",
        "capa": "covers/covers_ps1/Fear_Effect.jpg",
        "logo": "play_game_logos/Fear-Effect-Logo.png",
        "background": "backgrounds/hesasader.jpg",
        "hours": "9h",
        "year": "2000",
        'rate': '8.1/',
        "rateGray": '<span class="rateGray" id="rateGray15">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card16')
    },
    {
        'id': '16',
        'titulo': 'Resident Evil 3: Nemesis',
        "desc": "Jill Valentine tenta escapar de Raccoon City durante o surto zumbi, sendo implacavelmente perseguida pela bio-arma Nemesis em um clássico do survival horror.",
        "capa": "covers/covers_ps1/Resident-Evil-30.jpg",
        "logo": "play_game_logos/27750161b72331d1b1cad81cf19f315b.png",
        "background": "backgrounds/screenshot-2021-05-11-7.48.10-pm-e1620776960955.png",
        "hours": "7h",
        "year": "1999",
        'rate': '8.8/',
        "rateGray": '<span class="rateGray" id="rateGray16">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card17')
    },
    {
        'id': '17',
        'titulo': 'Dino Crisis',
        "desc": "Regina e uma equipe de forças especiais investigam uma ilha isolada tomada por dinossauros após um experimento de 'Terceira Energia' dar errado.",
        "capa": "covers/covers_ps1/220px-Dino_Crisis.jpg",
        "logo": "play_game_logos/BDpkJPiKJjLG2h39Mr4zCh1n.avif",
        "background": "backgrounds/dino_1dd7.jpg",
        "hours": "7h",
        "year": "1999",
        'rate': '8.5/',
        "rateGray": '<span class="rateGray" id="rateGray17">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card18')
    },
    {
        'id': '18',
        'titulo': 'A1 Racing',
        "desc": "Um jogo de corrida arcade focado em competições de alta velocidade e pistas variadas para jogadores que buscam desafios simples e diretos.",
        "capa": "covers/covers_ps1/Racing.jpg",
        "logo": "play_game_logos/{8344BE1E-AC65-442E-85DA-CA147321433C}.png",
        "background": "backgrounds/maxresdsasefault.jpg",
        "hours": "2h",
        "year": "2001",
        'rate': '6.0/',
        "rateGray": '<span class="rateGray" id="rateGray18">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card19')
    },
    {
        'id': '20',
        'titulo': 'The X-Files',
        "desc": "Os agentes Mulder e Scully investigam casos paranormais nesta aventura em live-action, focada em solução de enigmas e mistérios governamentais sombrios.",
        "capa": "covers/covers_ps1/Thexfilesgamecover.jpg",
        "logo": "play_game_logos/{6F9ED222-24E3-4469-B0CD-273292626295}.png",
        "background": "backgrounds/xfiles3.jpg",
        "hours": "12h",
        "year": "1998",
        'rate': '7.8/',
        "rateGray": '<span class="rateGray" id="rateGray19">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card20')
    },
    {
        'id': '21',
        'titulo': 'Heart of Darkness',
        "desc": "Andy busca seu cachorro em um mundo sombrio e perigoso, enfrentando sombras e resolvendo enigmas em uma aventura cinematográfica de plataforma com animações impressionantes e únicos.",
        "capa": "covers/covers_ps1/Heart_of_Darkness_Coverart.png",
        "logo": "play_game_logos/r2_b3507e34-ac25-4d40-97f2-bea304206c62.png",
        "background": "backgrounds/revisitando-heart-of-darkness-ps1-capa.webp",
        "hours": "6h",
        "year": "1998",
        'rate': '8.1/',
        "rateGray": '<span class="rateGray" id="rateGray21">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card21')
    },
    {
        'id': '22',
        'titulo': 'Mortal Kombat Trilogy',
        "desc": "A versão definitiva que reúne personagens e cenários dos três primeiros jogos em um torneio brutal de luta para decidir o destino do Reino da Terra contra Shao Kahn.",
        "capa": "covers/covers_ps1/Mortal-Kombat-Trilogy.jpg",
        "logo": "play_game_logos/r2_31c2f646-65f2-4ccd-b8e2-f13c05d84150.png",
        "background": "backgrounds/image.png",
        "hours": "2h",
        "year": "1996",
        'rate': '8.2/',
        "rateGray": '<span class="rateGray" id="rateGray22">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card22')
    },
    {
        'id': '23',
        'titulo': 'Alone in the Dark: The New Nightmare',
        "desc": "Edward Carnby e Aline Cedrac investigam uma ilha sinistra infestada de criaturas que temem a luz, em um clima de puro suspense e terror psicológico clássico.",
        "capa": "covers/covers_ps1/Capa_aitd_the_new_nightmare_ps1.webp",
        "logo": "play_game_logos/2a5f0b0e7e04480fe0b812259804fc9ea30360f3d1162d5a67c8ecd8ff0dc2df_product_card_v2_logo_960x570.png",
        "background": "backgrounds/lxktadsbg1ystaudigqs.jpg",
        "hours": "10h",
        "year": "2001",
        'rate': '7.4/',
        "rateGray": '<span class="rateGray" id="rateGray23">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card23')
    },
    {
        'id': '24',
        'titulo': 'Silent Hill',
        "desc": "Harry Mason busca sua filha desaparecida em uma cidade envolta em névoa e pesadelos, definindo o gênero de horror psicológico com sua atmosfera opressora e perturbadora.",
        "capa": "covers/covers_ps1/220px-Silent_Hill_video_game_cover.png",
        "logo": "play_game_logos/{179A4C8B-6CB6-40A3-B437-3274253F8840}.png",
        "background": "backgrounds/Silent-Hill.jpg",
        "hours": "8h",
        "year": "1999",
        'rate': '9.0/',
        "rateGray": '<span class="rateGray" id="rateGray24">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card24')
    },
    {
        'id': '25',
        'titulo': 'Legend',
        "desc": "Um guerreiro viaja por um reino de fantasia medieval para derrotar um feiticeiro maligno neste jogo de luta side-scrolling focado em combate clássico com espadas e magia.",
        "capa": "covers/covers_ps1/Legend.jpg",
        "logo": "play_game_logos/2dk2RRM2dZ8gKjXsrozapsD83FxL3Xbyyi5LFttAhrXxr16mCe4arfLHSaYxYUGTkocYKof29W6upf3gFGBNkmRjqFhqC8zgRrqe7Z6RXPD3pSpiGrt5qrK48FxCtVLvEq2KuyjyxQHyAozEUnN3kjEt2uAVeqgYmVkAXbAQva.png",
        "background": "backgrounds/maxresdefasault.jpg",
        "hours": "4h",
        "year": "1998",
        'rate': '6.9/',
        "rateGray": '<span class="rateGray" id="rateGray25">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card25')
    },
    {
        'id': '26',
        'titulo': 'Tomb Raider 3: Adventures of Lara Croft',
        "desc": "Lara Croft viaja pelo mundo em busca de artefatos feitos de um meteoro antigo, enfrentando novos perigos em selvas, desertos e instalações de alta segurança globais.",
        "capa": "covers/covers_ps1/SLUS-00691.jpg",
        "logo": "play_game_logos/Tomb_Raider_III.webp",
        "background": "backgrounds/ps1_tombraider3_2_thumb.jpg",
        "hours": "18h",
        "year": "1998",
        'rate': '8.2/',
        "rateGray": '<span class="rateGray" id="rateGray26">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card26')
    },
    {
        'id': '27',
        'titulo': 'Fear Effect 2: Retro Helix',
        "desc": "Uma prequela que explora as origens dos mercenários em uma trama de conspiração futurista e terror sobrenatural, utilizando visuais estilizados em cel-shading de tirar o fôlego.",
        "capa": "covers/covers_ps1/Fear_effect_2.jpg",
        "logo": "play_game_logos/fehelixlogo.jpg",
        "background": "backgrounds/{D1C72DA0-D0B8-4CFB-ABAD-383CD74D3275}.png",
        "hours": "10h",
        "year": "2001",
        'rate': '8.1/',
        "rateGray": '<span class="rateGray" id="rateGray27">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card27')
    },
    {
        'id': '28',
        'titulo': 'Galerians',
        "desc": "Rion acorda em um hospital sem memórias, mas com poderes psíquicos letais, precisando lutar contra uma inteligência artificial que planeja escravizar a humanidade em um futuro distópico.",
        "capa": "covers/covers_ps1/Galerians_Coverart.png",
        "logo": "play_game_logos/galerians-logo-altar-of-gaming-300x150.avif",
        "background": "backgrounds/Galerians-Ash.webp",
        "hours": "8h",
        "year": "1999",
        'rate': '7.9/',
        "rateGray": '<span class="rateGray" id="rateGray28">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card28')
    },
    {
        'id': '29',
        'titulo': 'D',
        "desc": "Laura Harris explora um castelo surreal que se materializou em um hospital, tentando descobrir o motivo dos crimes cometidos por seu pai em uma experiência cinematográfica tensa.",
        "capa": "covers/covers_ps1/D.jpg",
        "logo": "play_game_logos/D (USA).png",
        "background": "backgrounds/ps1-game-d-1995-v0-o7rtybqev47f1.webp",
        "hours": "2h",
        "year": "1995",
        'rate': '7.0/',
        "rateGray": '<span class="rateGray" id="rateGray29">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card29')
    },
    {
        'id': '30',
        'titulo': 'Dino Crisis 2',
        "desc": "Uma equipe de resgate viaja no tempo para uma cidade invadida por dinossauros, focando em ação intensa e combate rápido para garantir a sobrevivência em um mundo pré-histórico.",
        "capa": "covers/covers_ps1/220px-Dino_Crisis_2.jpg",
        "logo": "play_game_logos/DINO2logo.png",
        "background": "backgrounds/maxressasdefault.jpg",
        "hours": "6h",
        "year": "2000",
        'rate': '8.6/',
        "rateGray": '<span class="rateGray" id="rateGray30">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card30')
    },
    {
        'id': '31',
        'titulo': 'Vigilante 8',
        "desc": "Veículos armados lutam em arenas destrutíveis nos anos 70. Escolha um lado na guerra entre Vigilantes e Coyotes em combates motorizados explosivos e intensos.",
        "capa": "covers/covers_ps1/220px-Vigilante_8.jpg",
        "logo": "play_game_logos/V8logo.webp",
        "background": "backgrounds/aamaxresdefault.jpg",
        "hours": "5h",
        "year": "1998",
        'rate': '8.3/',
        "rateGray": '<span class="rateGray" id="rateGray31">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card31')
    },
    {
        'id': '32',
        'titulo': 'Spyro the Dragon',
        "desc": "O pequeno dragão Spyro deve libertar seus companheiros transformados em cristal e recuperar ovos roubados em um mundo de plataforma 3D vibrante e cativante.",
        "capa": "covers/covers_ps1/220px-Spyro_the_Dragon.jpg",
        "logo": "play_game_logos/Spyro_the_dragon_hd_logo_by_freezingicekirby-d8icyef.webp",
        "background": "backgrounds/bdd6f5c4-6bef-4859-b62f-479979fc2207.jpg",
        "hours": "6h",
        "year": "1998",
        'rate': '8.6/',
        "rateGray": '<span class="rateGray" id="rateGray32">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card32')
    },
    {
        'id': '33',
        'titulo': 'Gran Turismo',
        "desc": "O simulador de direção definitivo trouxe realismo sem precedentes ao PS1, com centenas de carros licenciados e um modo carreira profundo focado em licenças e competições.",
        "capa": "covers/covers_ps1/Gran_Turismo_-_Cover_-_North_America.jpg",
        "logo": "play_game_logos/Gran-Turismo-Logo-1997-2009.jpg",
        "background": "backgrounds/p23813071_v_h8_am.jpg",
        "hours": "25h",
        "year": "1997",
        'rate': '8.7/',
        "rateGray": '<span class="rateGray" id="rateGray33">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card33')
    },
    {
        'id': '34',
        'titulo': 'Riven: The Sequel to Myst',
        "desc": "Sequência direta de Myst, este jogo de aventura e quebra-cabeças foca na exploração de ilhas detalhadas para resgatar a esposa de Atrus de um mundo em colapso.",
        "capa": "covers/covers_ps1/Riven_Coverart.png",
        "logo": "play_game_logos/68524e7a-f21f-4178-bf3c-025150339cfe.png",
        "background": "backgrounds/657a3c5a4f14d150bd789ed4_header.jpeg",
        "hours": "15h",
        "year": "1997",
        'rate': '8.7/',
        "rateGray": '<span class="rateGray" id="rateGray34">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card34')
    },
    {
        'id': '35',
        'titulo': 'Jackie Chan Stuntmaster',
        "desc": "Controle o lendário Jackie Chan em um beat 'em up frenético, usando o cenário e artes marciais para derrotar gangues em Nova York e salvar seu avô.",
        "capa": "covers/covers_ps1/220px-JackieChanStuntmaster-1.jpg",
        "logo": "play_game_logos/Jackie Chan Stuntmaster (USA).png",
        "background": "backgrounds/msaxresdsasefault.jpg",
        "hours": "4h",
        "year": "2000",
        'rate': '8.3/',
        "rateGray": '<span class="rateGray" id="rateGray35">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card35')
    },
    {
        'id': '36',
        'titulo': 'Street Fighter Collection',
        "desc": "Compilação clássica que traz versões fiéis de Super Street Fighter II e Street Fighter Alpha 2 para o console, celebrando a era de ouro dos jogos de luta.",
        "capa": "covers/covers_ps1/Street_Fighter_Collection.jpeg",
        "logo": "play_game_logos/Street_fighter_collection_logo_by_ringostarr39-d7p88ol.webp",
        "background": "backgrounds/hsasasq720.jpg",
        "hours": "3h",
        "year": "1997",
        'rate': '8.1/',
        "rateGray": '<span class="rateGray" id="rateGray36">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card36')
    },
    {
        'id': '37',
        'titulo': 'Medal of Honor',
        "desc": "Como o tenente Jimmy Patterson, realize missões de infiltração e combate durante a Segunda Guerra Mundial neste influente e cinematográfico jogo de tiro em primeira pessoa.",
        "capa": "covers/covers_ps1/220px-Medal_of_Honor_1999_video_game.png",
        "logo": "play_game_logos/Medal_of_Honor_(1999)_Logo.png",
        "background": "backgrounds/maxrsasesdefault.jpg",
        "hours": "7h",
        "year": "1999",
        'rate': '8.6/',
        "rateGray": '<span class="rateGray" id="rateGray37">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card37')
    },
    {
        'id': '38',
        'titulo': 'Spider-Man 2: Enter Electro',
        "desc": "O Homem-Aranha enfrenta Electro e outros vilões clássicos em Manhattan, utilizando seus poderes de teia para impedir que o vilão obtenha um dispositivo de poder absoluto.",
        "capa": "covers/covers_ps1/Spider-Man_2_-_Enter_Electro_Coverart.png",
        "logo": "play_game_logos/Spider-Man_2_Enter_Electro_logo.png",
        "background": "backgrounds/5a1ab4b16b638d40d0999ec501a9e27d.jpg",
        "hours": "6h",
        "year": "2001",
        'rate': '8.2/',
        "rateGray": '<span class="rateGray" id="rateGray38">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card38')
    },
    {
        'id': '39',
        'titulo': 'Tomb Raider 2',
        "desc": "Lara Croft viaja da Grande Muralha da China até Veneza em busca da Adaga de Xian, enfrentando perigos em uma jornada de exploração e ação épica.",
        "capa": "covers/covers_ps1/Tomb_Raider_II.png",
        "logo": "play_game_logos/Tomb_Raider_II_international_logo.png",
        "background": "backgrounds/Tr2mainpage.webp",
        "hours": "15h",
        "year": "1997",
        'rate': '8.6/',
        "rateGray": '<span class="rateGray" id="rateGray39">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card39')
    },
    {
        'id': '40',
        'titulo': 'Blade',
        "desc": "Jogue como o caçador de vampiros Blade em uma missão para deter o submundo dos mortos-vivos, usando espadas e armas de fogo em combates sombrios e sangrentos.",
        "capa": "covers/covers_ps1/Blade_Coverart.png",
        "logo": "play_game_logos/DMaAJSco9QPCUamwRgGuYOm1p2.webp",
        "background": "backgrounds/diwwkap-fea61363-2cb5-46ed-a570-e649fe6b5372.jpg",
        "hours": "6h",
        "year": "2000",
        'rate': '6.8/',
        "rateGray": '<span class="rateGray" id="rateGray40">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card40')
    },
    {
        'id': '41',
        'titulo': 'Crash Bandicoot 2 – Cortex Strikes Back',
        "desc": "Crash retorna para coletar cristais para o Dr. Cortex, mas logo percebe que está sendo enganado em mais uma aventura de plataforma vibrante e desafiadora.",
        "capa": "covers/covers_ps1/220px-Crash_Bandicoot_2_Cortex_Strikes_Back_Game_Cover.jpg",
        "logo": "play_game_logos/Cb2logo.webp",
        "background": "backgrounds/69039.jpg",
        "hours": "7h",
        "year": "1997",
        'rate': '8.6/',
        "rateGray": '<span class="rateGray" id="rateGray41">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card41')
    },
    {
        'id': '42',
        'titulo': 'Yu-Gi-Oh! – Forbidden Memories',
        "desc": "Viaje ao Antigo Egito para resolver mistérios e enfrentar duelistas poderosos usando um sistema de cartas único, tentando reunir as sete Relíquias do Milênio.",
        "capa": "covers/covers_ps1/220px-Yu-Gi-Oh_Forbidden_Memories_Cover.png",
        "logo": "play_game_logos/dc6p6cj-cd5aa051-7d8a-4129-877e-c76a9bff4db7.webp",
        "background": "backgrounds/hsasq720.jpg",
        "hours": "15h",
        "year": "1999",
        'rate': '7.7/',
        "rateGray": '<span class="rateGray" id="rateGray42">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card42')
    },
    {
        'id': '43',
        'titulo': 'Doom',
        "desc": "Enfrente hordas de demônios em Marte neste clássico absoluto do tiro em primeira pessoa, conhecido por sua atmosfera sombria, trilha sonora intensa e combate rápido.",
        "capa": "covers/covers_ps1/Doom_cover_art.jpg",
        "logo": "play_game_logos/pngimg.com - doom_PNG23.png",
        "background": "backgrounds/gVwYiORLc3wIQqNAFKf9oAPZ.avif",
        "hours": "5h",
        "year": "1995",
        'rate': '8.7/',
        "rateGray": '<span class="rateGray" id="rateGray43">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card43')
    },
    {
        'id': '44',
        'titulo': 'Pac-Man World',
        "desc": "Pac-Man deve resgatar sua família das garras de Toc-Man em uma aventura de plataforma 3D que celebra os 20 anos do icônico herói comedor de pastilhas.",
        "capa": "covers/covers_ps1/220px-Pac-Man_World.jpg",
        "logo": "play_game_logos/173460.png",
        "background": "backgrounds/pac-man_world_2_re-pac_banner.jpg",
        "hours": "5h",
        "year": "1999",
        'rate': '7.8/',
        "rateGray": '<span class="rateGray" id="rateGray44">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card44')
    },
    {
        'id': '45',
        'titulo': 'Legacy Of Kain: Soul Reaver',
        "desc": "Como Raziel, busque vingança contra seu criador Kain em um mundo gótico sombrio, alternando entre planos materiais e espectrais para resolver enigmas e derrotar inimigos.",
        "capa": "covers/covers_ps1/Legacy_Of_Kain-_Soul_Reaver_Cover.jpg",
        "logo": "play_game_logos/Legacy_of_Kain_Soul_Reaver_1&2_Remastered.webp",
        "background": "backgrounds/b91bf8050afca6a83f16ea554de9b2133c80e3cbca48e36a.avif",
        "hours": "10h",
        "year": "1999",
        'rate': '8.8/',
        "rateGray": '<span class="rateGray" id="rateGray45">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card45')
    },
    {
        'id': '46',
        'titulo': 'Tekken 2',
        "desc": "O Torneio do Punho de Ferro retorna com Heihachi Mishima buscando retomar seu império de Kazuya, introduzindo novos lutadores e mecânicas que definiram o gênero.",
        "capa": "covers/covers_ps1/Tekken2Box.jpg",
        "logo": "play_game_logos/Tekken_2.webp",
        "background": "backgrounds/3cfc0958-9f0d-4a06-b583-3024c274dfb7.png",
        "hours": "3h",
        "year": "1996",
        'rate': '8.8/',
        "rateGray": '<span class="rateGray" id="rateGray46">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card46')
    },
    {
        'id': '47',
        'titulo': 'Parasite Eve',
        "desc": "A oficial Aya Brea enfrenta uma ameaça biológica em Nova York, combinando elementos de RPG e survival horror em uma trama envolvente sobre evolução e mitocôndrias.",
        "capa": "covers/covers_ps1/SLUS-00662.jpg",
        "logo": "play_game_logos/pe_logo.png",
        "background": "backgrounds/parasite-eve-playstation-art-banner.jpg",
        "hours": "10h",
        "year": "1998",
        'rate': '8.3/',
        "rateGray": '<span class="rateGray" id="rateGray47">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card47')
    },
    {
        'id': '48',
        'titulo': 'Star Ocean: The Second Story',
        "desc": "Escolha entre Claude ou Rena nesta jornada épica intergaláctica de RPG, apresentando múltiplos finais, um sistema de criação profundo e batalhas em tempo real dinâmicas.",
        "capa": "covers/covers_ps1/Star_Ocean_Second_Story.jpg",
        "logo": "play_game_logos/Logo_Star_Ocean_The_Second_Story.jpg",
        "background": "backgrounds/GamesIndex_GameListing_Artwork-d0q3onw4j.jpg",
        "hours": "45h",
        "year": "1998",
        'rate': '8.4/',
        "rateGray": '<span class="rateGray" id="rateGray48">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card48')
    },
    {
        'id': '49',
        'titulo': 'Command & Conquer',
        "desc": "Lidere a GDI ou a Irmandade de Nod em uma guerra estratégica por recursos e território neste título fundamental que definiu o gênero de estratégia em tempo real.",
        "capa": "covers/covers_ps1/Command__Conquer_1995_cover.jpg",
        "logo": "play_game_logos/unnamed.png",
        "background": "backgrounds/command-and-conquer-the-ultimate-collection-ultimate-collection-pc-game-origin-cover.jpg",
        "hours": "20h",
        "year": "1996",
        'rate': '8.4/',
        "rateGray": '<span class="rateGray" id="rateGray49">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card49')
    },
    {
        'id': '50',
        'titulo': 'One',
        "desc": "Um jogo de ação 3D intenso onde você controla um homem com o braço transformado em arma, lutando para descobrir sua identidade enquanto destrói tudo no caminho.",
        "capa": "covers/covers_ps1/One.jpg",
        "logo": "play_game_logos/One_Coverart.png",
        "background": "backgrounds/unnaaamed.jpg",
        "hours": "4h",
        "year": "1997",
        'rate': '7.5/',
        "rateGray": '<span class="rateGray" id="rateGray50">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "duckstation/JOGOS PS1/JOGOS PRONTOS PS1/a",
        'nome': '',
        "cardName": "",
        "cardd": document.getElementById('libraryPs1Card50')
    }
];
// CATALOGO PS2
const catalogo_ps2 = [
    {
        'id': '0',
        'titulo': 'Resident Evil 4',
        "desc": "O agente especial Leon S. Kennedy é enviado em uma missão de alto risco para resgatar a jovem filha do presidente dos EUA, que foi sequestrada por um culto sinistro e misterioso na Espanha. Agora, ele deve enfrentar horrores indescritíveis para salvar Ashley Graham e escapar das garras de uma seita macabra que esconde segredos terríveis e sombrios naquela região remota e amaldiçoada, onde o perigo espreita em cada esquina.",
        "capa": "covers/covers_ps2/resident-evil-4.jpg",
        "logo": "play_game_logos/resident-evil-4.png",
        "background": "backgrounds/resident-evil-4.jpg",
        "hours": "16h",
        "year": "2005",
        'rate': '9.6/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Resident Evil 4 (USA).iso",
        'nome': 'Resident Evil 4 (USA).iso',
        "cardName": "card11",
        "cardd": document.getElementById('cardd11')
    },
    {
        'id': '1',
        'titulo': 'Metal Gear Solid 3: Subsistence',
        "desc": "Snake deve se infiltrar na selva soviética durante a Guerra Fria para impedir uma catástrofe nuclear. Enfrente chefes lendários e use táticas de sobrevivência nesta versão definitiva do clássico de espionagem.",
        "capa": "covers/covers_ps2/Metal_Gear_Solid_3_Subsistence_-_North-american_cover.jpg",
        "logo": "play_game_logos/metal-gear-solid-3.jpg",
        "background": "backgrounds/Metal Gear Solid 3 - Subsistence - Box.jpg",
        "hours": "18h",
        "year": "2005",
        'rate': '9.6/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Metal Gear Solid 3 - Subsistence (Europe) (EnFr) (Disc 3) (Existence).iso",
        'nome': 'Metal Gear Solid 3 - Subsistence (Europe) (EnFr) (Disc 3) (Existence).iso',
        "cardName": "card11",
        "cardd": document.getElementById('cardd12')
    },
    {
        "id": "2",
        "titulo": "God Of War 2",
        "desc": "Após ser traído pelos cruéis Deuses do Olimpo e jogado no abismo do Submundo, o implacável Kratos inicia uma jornada épica. Movido por um ódio sem fim, o Fantasma de Esparta deve enfrentar perigos colossais para encontrar as poderosas Irmãs do Destino. Somente através delas ele poderá alterar o seu passado sombrio e finalmente obter a sua vingança.",
        "capa": "covers/covers_ps2/god-of-war2.jpg",
        "logo": "play_game_logos/god-of-war-2.png",
        "background": "backgrounds/god-of-war-2.webp",
        "hours": "12h",
        "year": "2007",
        "rate": "9.5/",
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/God of War II (USA).iso",
        'nome': 'God of War II (USA).iso',
        "cardName": "card12",
        "cardd": document.getElementById('cardd13')
    },
    {
        'id': '3',
        "titulo": "Grand Thef Auto San Andreas",
        "desc": "Faz cinco anos que Carl Johnson conseguiu escapar das pressões esmagadoras da vida em Los Santos, no estado de San Andreas. A metrópole estava se autodestruindo, consumida por guerras sangrentas de gangues. Ele buscou refúgio longe do caos, mas as cicatrizes daquela cidade violenta e decadente ainda o perseguem onde quer que ele vá.",
        "capa": "covers/covers_ps2/gta-san-andreas.jpg",
        "logo": "play_game_logos/gta-san-andreas.png",
        "background": "backgrounds/gta-san-andreas.png",
        "hours": "31h",
        "year": "2004",
        "rate": "9.5/",
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Grand Theft Auto - San Andreas (USA) (v3.00).iso",
        'nome': 'Grand Theft Auto - San Andreas (USA) (v3.00).iso',
        "cardName": "card13",
        "cardd": document.getElementById('cardd14')
    },
    {
        'id': '4',
        'titulo': 'Metal Gear Solid 2: Sons of Liberty',
        "desc": "Raiden deve se infiltrar na Big Shell para resgatar o presidente e deter um grupo terrorista. Com uma narrativa complexa e inovadora, o jogo explora temas de controle social e a era da informação digital.",
        "capa": "covers/covers_ps2/Metal Gear Solid 2.png",
        "logo": "play_game_logos/Metal Gear Solid 2.png",
        "background": "backgrounds/Metal Gear Solid 2.avif",
        "hours": "13h",
        "year": "2001",
        'rate': '9.4/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Metal Gear Solid 2 - Sons of Liberty (USA).iso",
        'nome': 'Metal Gear Solid 2 - Sons of Liberty (USA).iso',
        "cardName": "card14",
        "cardd": document.getElementById('cardd15')
    },
    {
        'id': '5',
        "titulo": "God Of War",
        "desc": "Kratos, o guerreiro espartano assombrado por seu passado, embarca em uma busca sangrenta para derrotar Ares, o Deus da Guerra. Explore a Grécia Antiga e enfrente criaturas mitológicas com as icônicas Lâminas do Caos.",
        "capa": "covers/covers_ps2/god-of-war.jpg",
        "logo": "play_game_logos/god-of-war.png",
        "background": "backgrounds/god-of-war.jpg",
        "hours": "9h",
        "year": "2005",
        "rate": "9.3/",
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/God of War (USA).iso",
        "nome": "God of War (USA).iso",
        "cardName": "card15",
        "cardd": document.getElementById('cardd16')
    },
    {
        'id': '6',
        'titulo': 'Grand Theft Auto: Vice City',
        "desc": "Tommy Vercetti chega à ensolarada Vice City nos anos 80 para expandir um império criminoso. Entre em um mundo de luzes neon, músicas icônicas e muita ação enquanto sobe na hierarquia do crime nesta metrópole.",
        "capa": "covers/covers_ps2/gta-vice-city.png",
        "background": "backgrounds/GrandTheftAutoViceCity.webp",
        "logo": "play_game_logos/Grand_Theft_Auto_Vice_City_logo.png",
        "hours": "19h",
        "year": "2002",
        'rate': '9.3/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Grand Theft Auto - Vice City (USA) (v3.00).iso",
        "nome": "Grand Theft Auto - Vice City (USA) (v3.00).iso",
        "cardName": "card16",
        "cardd": document.getElementById('cardd17')
    },
    {
        'id': '7',
        'titulo': 'Shadow of the Colossus',
        "desc": "Em uma terra desolada, Wander deve derrotar dezesseis gigantes monumentais para trazer uma jovem de volta à vida. Uma obra-prima visual e emocional que desafia o jogador em batalhas épicas contra colossos.",
        "capa": "covers/covers_ps2/shadow-of-the-colossus_3b8q.jpg",
        "background": "backgrounds/shadow-of-the-colossus.avif",
        "logo": "play_game_logos/shadow-of-the-colossus.jpg",
        "hours": "7h",
        "year": "2005",
        'rate': '9.3/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Shadow of the Colossus (USA).iso",
        "cardName": "card17",
        'nome': "Shadow of the Colossus (USA).iso",
        "cardd": document.getElementById('cardd18')
    },
    {
        'id': '8',
        "titulo": "WWE SmackDown! Here Comes the Pain",
        "desc": "Sinta o impacto brutal de WWE SmackDown! Here Comes the Pain, o quinto e lendário capítulo da renomada série de luta. Apresentando um elenco massivo de Superstars icônicos da WWE, o jogo oferece combates viscerais e um modo de temporada profundo e imersivo.",
        "capa": "covers/covers_ps2/wwe-smack-down-here-comes-the-pain.png",
        "logo": "play_game_logos/wwe-smack-down.png",
        "background": "backgrounds/wwe-smackdown.jpg",
        "hours": "15h",
        "year": "2003",
        "rate": "9.1/",
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/WWE SmackDown Here Comes the Pain (USA).iso",
        "nome": "WWE SmackDown Here Comes the Pain (USA).iso",
        "cardName": "card18",
        "cardd": document.getElementById('cardd19')
    },
    {
        'id': '9',
        'titulo': 'Final Fantasy X',
        "desc": "Tidus viaja para o mundo de Spira para ajudar a invocadora Yuna em sua jornada sagrada contra a ameaça de Sin. Uma aventura emocionante com combates por turnos e uma história de amor e sacrifício inesquecível.",
        "capa": "covers/covers_ps2/final-fantasy-x.webp",
        "background": "backgrounds/Final Fantasy X - Box.jpg",
        "logo": "play_game_logos/Final Fantasy X - Box.webp",
        "hours": "46h",
        "year": "2001",
        'rate': '9.1/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Final Fantasy X (USA).iso",
        "nome": "Final Fantasy X (USA).iso",
        "cardName": "card19",
        "cardd": document.getElementById('cardd20')
    },
    {
        'id': '10',
        'titulo': 'Dragon Ball Z: Budokai Tenkaichi 3',
        "desc": "Viva batalhas frenéticas com mais de 160 personagens do universo Dragon Ball. Com cenários destrutíveis e golpes icônicos, é a experiência definitiva de luta para os fãs da obra lendária de Akira Toriyama.",
        "capa": "covers/covers_ps2/D_NQ_NP_716264-MLB80908025523_112024-O.webp",
        "background": 'backgrounds/dragon-ball-z-budokai-3.jpg',
        "logo": "play_game_logos/Dragon_Ball_Z_Budokai_3.svg",
        "hours": "15h",
        "year": "2007",
        'rate': '9.0/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Dragon Ball Z - Budokai Tenkaichi 3 (USA) (En,Ja).iso",
        'nome': "Dragon Ball Z - Budokai Tenkaichi 3 (USA) (En,Ja).iso",
        "cardName": "card20",
        "cardd": document.getElementById('cardd21')
    },
    {
        'id': '11',
        'titulo': 'Tekken 5',
        "desc": "O quinto torneio Rei do Punho de Ferro retorna com jogabilidade rápida, gráficos impressionantes e um vasto elenco de lutadores icônicos em uma busca por vingança e poder familiar.",
        "capa": "covers/covers_ps2/tekken-5.jpg",
        "background": "backgrounds/images.jpg",
        "logo": "play_game_logos/tekken-5.webp",
        "hours": "4h",
        "year": "2005",
        'rate': '8.9/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Tekken 5 (USA).iso",
        "cardName": "card21",
        "cardd": document.getElementById('cardd22'),
        'nome': 'Tekken 5 (USA).iso'
    },
    {
        'id': '12',
        'titulo': 'Gran Turismo 4',
        "desc": "O simulador de direção definitivo oferece uma quantidade massiva de carros e pistas reais, com física realista e um modo carreira profundo que definiu os jogos de corrida.",
        "capa": "covers/covers_ps2/gran-turismo-4.jpg",
        "background": "backgrounds/gran-turismo-4.webp",
        "logo": "play_game_logos/gran-turismo-4.png",
        "hours": "77h",
        "year": "2004",
        'rate': '8.9/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Gran Turismo 4 (USA) (v2.00).iso",
        "nome": "Gran Turismo 4 (USA) (v2.00).iso",
        "cardName": "card22",
        "cardd": document.getElementById('cardd23')
    },
    {
        'id': '13',
        'titulo': 'Burnout 3: Takedown',
        "desc": "Velocidade insana e destruição espetacular se encontram neste jogo de corrida arcade, onde tirar os oponentes da pista é tão importante quanto cruzar a linha de chegada.",
        "capa": "covers/covers_ps2/Burnout_3_Takedown_Cover.jpg",
        "background": "backgrounds/Banner.webp",
        "logo": "play_game_logos/Burnout-3-Takedown-Logo-PNG-Photos.png",
        "hours": "15h",
        "year": "2004",
        'rate': '8.9/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/PS Mania 2.0 Spaccacodici - Burnout 3 (Italy) (Unl).iso",
        "nome": "PS Mania 2.0 Spaccacodici - Burnout 3 (Italy) (Unl).iso",
        "cardName": "card23",
        "cardd": document.getElementById('cardd24')
    },
    {
        'id': '14',
        'titulo': "Devil May Cry 3: Dante's Awakening",
        "desc": "Controlando um jovem Dante, este capítulo foca em combates intensos e estilosos com espadas e pistolas, narrando a rivalidade épica contra seu irmão Vergil em uma torre demoníaca.",
        "capa": "covers/covers_ps2/1618687791-5a1568b7-33b8-4acc-95ba-b5588680e3ca.jpg",
        "background": "backgrounds/devil-may-cry-3-cover-altar-of-gaming.webp",
        "logo": "play_game_logos/Dmc3-logo.webp",
        "hours": "13h",
        "year": "2005",
        'rate': '8.9/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Devil May Cry 3 - Dantes Awakening (Europe) (EnFrDeEsIt) (Special Edition).iso",
        "nome": "Devil May Cry 3 - Dantes Awakening (Europe) (EnFrDeEsIt) (Special Edition).iso",
        "cardName": "card24",
        "cardd": document.getElementById('cardd25')
    },
    {
        'id': '15',
        'titulo': 'Kingdom Hearts',
        "desc": "Uma colaboração mágica entre Disney e Square Enix, unindo personagens clássicos de animação e Final Fantasy em um RPG de ação sobre amizade, luz e escuridão.",
        "capa": "covers/covers_ps2/Kingdom-Hearts.jpg",
        "background": "backgrounds/dcw0nm8-73aa6215-f70b-4b52-bbc7-486f3e8aad36.jpg",
        "logo": "play_game_logos/300px-Kingdom_Hearts_Logo_KH.png",
        "hours": "28h",
        "year": "2002",
        'rate': '8.9/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Kingdom Hearts (USA).iso",
        "cardName": "card25",
        'nome': "Kingdom Hearts (USA).iso",
        "cardd": document.getElementById('cardd26')
    },
{
        'id': '16',
        'titulo': 'Need for Speed: Most Wanted',
        "desc": "Torne-se o piloto mais procurado superando a Blacklist e escapando de perseguições policiais intensas em um mundo aberto focado em corridas ilegais e personalização de carros.",
        "capa": "covers/covers_ps2/Need-for-Speed-Most-Wanted-250x349t.jpg",
        "background": "backgrounds/need-for-speed-most-wanted.png",
        "logo": "play_game_logos/need-for-speed-most-wanted.jpg",
        "hours": "17h",
        "year": "2005",
        'rate': '8.8/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Need for Speed - Most Wanted (USA) (v2.00).iso",
        "nome": "Need for Speed - Most Wanted (USA) (v2.00).iso",
        "cardName": "card26",
        "cardd": document.getElementById('cardd27')
    },
    {
        'id': '17',
        'titulo': 'Dragon Ball Z: Budokai 3',
        "desc": "O ápice da luta 2.5D de Dragon Ball, apresentando transformações em tempo real, teletransportes estratégicos e uma vasta seleção de guerreiros da saga Z e GT.",
        "capa": "covers/covers_ps2/DragonBall-Z-Budokai-3.jpg",
        "background": "backgrounds/2c0597e05afee1eff70e5c97ec5aebb3.png",
        "logo": "play_game_logos/budokai3.png",
        "hours": "10h",
        "year": "2004",
        'rate': '8.8/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Dragon Ball Z - Budokai Tenkaichi 3 (USA) (EnJa).iso",
        "nome": "Dragon Ball Z - Budokai Tenkaichi 3 (USA) (EnJa).iso",
        "cardName": "card27",
        "cardd": document.getElementById('cardd28')
    },
    {
        'id': '18',
        'titulo': 'Hitman: Blood Money',
        "desc": "O Agente 47 retorna para assassinatos profissionais onde a criatividade é sua melhor arma. Planeje mortes perfeitas que pareçam acidentes neste aclamado jogo de furtividade.",
        "capa": "covers/covers_ps2/Hitman-Blood-Money.jpg",
        "background": "backgrounds/2x1_NSwitchDS_HitmanBloodMoneyReprisal_image1600w.jpg",
        "logo": "play_game_logos/Hitman-blood-money-logo.jpg",
        "hours": "13h",
        "year": "2006",
        'rate': '8.8/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Hitman - Blood Money (USA).iso",
        "cardName": "card28",
        "nome": "Hitman - Blood Money (USA).iso",
        "cardd": document.getElementById('cardd29')
    },
    {
        'id': '19',
        'titulo': 'Def Jam: Fight for NY',
        "desc": "Lutadores de rua e ícones do Hip-Hop se enfrentam em combates brutais. Com um sistema de customização profundo, lute pelo controle do submundo de Nova York.",
        "capa": "covers/covers_ps2/Def-Jam-Fight-for-NY-ps2.png",
        "background": "backgrounds/6e71a8c8-fa64-4235-87c7-f6d95eef8e91.png",
        "logo": "play_game_logos/defJam.png",
        "hours": "10h",
        "year": "2004",
        'rate': '8.7/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Def Jam - Fight for NY (USA).iso",
        "nome": "Def Jam - Fight for NY (USA).iso",
        "cardName": "card29",
        "cardd": document.getElementById('cardd30')
    },
    {
        'id': '20',
        'titulo': 'Need for Speed: Underground 2',
        "desc": "Explore uma cidade noturna dominada pela cultura do tuning. Personalize seu carro ao extremo e participe de diversos eventos de corrida em um mapa aberto vibrante.",
        "capa": "covers/covers_ps2/Need-for-Speed-Underground-2.jpg",
        "background": "backgrounds/need-for-speed-underground-2.png",
        "logo": "play_game_logos/need-for-speed-underground-2-logo.png",
        "hours": "19h",
        "year": "2004",
        'rate': '8.6/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Need for Speed - Most Wanted (USA) (v2.00).iso",
        "nome": "Need for Speed - Most Wanted (USA) (v2.00).iso",
        "cardName": "card30",
        "cardd": document.getElementById('cardd31')
    },
    {
        'id': '21',
        'titulo': 'Ratchet & Clank',
        "desc": "Uma aventura intergaláctica repleta de humor, armas bizarras e muita ação. Ajude a dupla dinâmica a salvar a galáxia de um vilão corporativo ganancioso.",
        "capa": "covers/covers_ps2/Ratchet-Clank-Going-Commando.png",
        "background": "backgrounds/ratchet-clank-reboot-banner.jpg",
        "logo": "play_game_logos/mxywezok9ubb1.png",
        "hours": "11h",
        "year": "2002",
        'rate': '8.6/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Ratchet Clank (USA) (EnFrDeEsIt).iso",
        "nome": "Ratchet Clank (USA) (EnFrDeEsIt).iso",
        "cardName": "card31",
        "cardd": document.getElementById('cardd32')
    },
    {
        'id': '22',
        'titulo': 'WWE SmackDown! vs. Raw',
        "desc": "A rivalidade das marcas da WWE ganha vida com gráficos melhorados, novas mecânicas de submissão e um modo temporada envolvente para os fãs de luta livre.",
        "capa": "covers/covers_ps2/WWE-SmackDown-vs.-Raw.jpg",
        "background": "backgrounds/WWE-Smackdown-vs-Raw.avif",
        "logo": "play_game_logos/WWE Smackdown vs Raw 2008 - PS2 - Logo.jpg",
        "hours": "10h",
        "year": "2004",
        'rate': '8.6/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/WWE SmackDown vs. Raw (USA).iso",
        "nome": "WWE SmackDown vs. Raw (USA).iso",
        "cardName": "card32",
        "cardd": document.getElementById('cardd33')
    },
    {
        'id': '23',
        'titulo': 'Devil May Cry',
        "desc": "O jogo que definiu o gênero de ação estilosa. Controle Dante em uma caçada a demônios dentro de um castelo gótico, combinando ataques de espada e fogo rápido.",
        "capa": "covers/covers_ps2/Devil-May-Cry.jpg",
        "background": "backgrounds/310ddd22e9c1e3a3c1f01a7fa21c3aa0.jpg",
        "logo": "play_game_logos/DMC.webp",
        "hours": "7h",
        "year": "2001",
        'rate': '8.5/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Devil May Cry (USA).iso",
        "nome": "Devil May Cry (USA).iso",
        "cardName": "card33",
        "cardd": document.getElementById('cardd34')
    },
    {
        'id': '24',
        'titulo': 'Downhill Domination',
        "desc": "Corridas frenéticas de mountain bike descendo montanhas íngremes. Use ataques contra adversários e faça manobras incríveis para ganhar velocidade e vencer as competições.",
        "capa": "covers/covers_ps2/downhill-domination-box-art.jpg",
        "background": "backgrounds/maxresdefault.jpg",
        "logo": "play_game_logos/d78c7ea7c8c149904c3ef11359bdaa4e.png",
        "hours": "5h",
        "year": "2003",
        'rate': '8.4/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Downhill Domination (USA).iso",
        "nome": "Downhill Domination (USA).iso",
        "cardName": "card34",
        "cardd": document.getElementById('cardd35')
    },
    {
        'id': '25',
        'titulo': 'Prince of Persia: The Sands of Time',
        "desc": "Uma obra-prima de plataforma e quebra-cabeças. Manipule o tempo com a Adaga do Tempo e realize acrobacias fluidas para salvar um reino corrompido pelas areias mágicas.",
        "capa": "covers/covers_ps2/Prince-of-Persia-The-Sands-of-Time.jpg",
        "background": "backgrounds/header.jpg",
        "logo": "play_game_logos/22f2729737ae3dc9702e4cee0eb3e900.png",
        "hours": "9h",
        "year": "2003",
        'rate': '8.4/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Prince of Persia - The Sands of Time (USA) (EnFrEs).iso",
        "nome": "Prince of Persia - The Sands of Time (USA) (EnFrEs).iso",
        "cardName": "card35",
        "cardd": document.getElementById('cardd36')
    },
    {
        'id': '26',
        'titulo': 'Guitar Hero',
        "desc": "Torne-se uma lenda do rock neste jogo rítmico revolucionário. Acerte as notas no tempo certo e toque clássicos da guitarra para levar a multidão ao delírio.",
        "capa": "covers/covers_ps2/1618688337-9eb0707d-0dea-44a1-b904-cf41b7eb02fa.png",
        "background": "backgrounds/02d796bfb1ab131efd76050ff25865b6.png",
        "logo": "play_game_logos/Guitar_hero_logo.png",
        "hours": "6h",
        "year": "2005",
        'rate': '8.4/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Guitar Hero (USA).iso",
        "nome": "Guitar Hero (USA).iso",
        "cardName": "card36",
        "cardd": document.getElementById('cardd37')
    },
{
            'id': '27',
            'titulo': 'Prince of Persia: Warrior Within',
            "desc": "Uma sequência mais sombria e violenta, focada em um sistema de combate livre e na fuga desesperada do Príncipe contra a criatura implacável conhecida como Dahaka.",
            "capa": "covers/covers_ps2/819ApEN575L._SL1500_.jpg",
            "background": "backgrounds/ce4a5cd2d961ac2c758c43c3c2b72caa.jpg",
            "logo": "play_game_logos/prince-of-persia-warrior-within-logo-altar-of-gaming-300x150.avif",
            "hours": "12h",
            "year": "2004",
            'rate': '8.4/',
            "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
            "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Prince of Persia - Warrior Within (USA) (EnFrEs).iso",
            "nome": "Prince of Persia - Warrior Within (USA) (EnFrEs).iso",
            "cardName": "card37",
            "cardd": document.getElementById('cardd38')
        },
        {
            'id': '28',
            'titulo': 'Tekken Tag Tournament',
            "desc": "Clássico jogo de luta que introduziu combates em duplas, permitindo trocas estratégicas e combos combinados com um elenco gigantesco de personagens amados da franquia.",
            "capa": "covers/covers_ps2/Tekken-Tag-Tournament.jpg",
            "background": "backgrounds/tekken-tag-tournament-2-wii-u-edition-wii-u-art-banner.jpg",
            "logo": "play_game_logos/Tekken_Tag_Tournament_(W).webp",
            "hours": "2h",
            "year": "2000",
            'rate': '8.4/',
            "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
            "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Tekken Tag Tournament (USA) (v1.00).iso",
            "nome": "Tekken Tag Tournament (USA) (v1.00).iso",
            "cardName": "card38",
            "cardd": document.getElementById('cardd39')
        },
        {
            'id': '29',
            'titulo': 'Black',
            "desc": "Um jogo de tiro em primeira pessoa focado em poder de fogo e destruição de cenários. Com armas detalhadas e efeitos sonoros viscerais, redefine a intensidade militar.",
            "capa": "covers/covers_ps2/Black.jpg",
            "background": "backgrounds/maxresdefaualt.jpg",
            "logo": "play_game_logos/black-game-logo-altar-of-gaming-300x150.avif",
            "hours": "6h",
            "year": "2006",
            'rate': '8.3/',
            "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
            "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Black (USA).iso",
            "nome": "Black (USA).iso",
            "cardName": "card39",
            "cardd": document.getElementById('cardd40')
        },
        {
            'id': '30',
            'titulo': 'God Hand',
            "desc": "Um beat 'em up excêntrico e desafiador. Com um sistema de combate altamente customizável e humor exagerado, lute contra demônios usando o lendário poder da God Hand.",
            "capa": "covers/covers_ps2/153422-God_Hand_Europe_EnFrDeEsIt-1482315106.jpg",
            "background": "backgrounds/78434f3b63efa331e51d1e41dd47cfb0.png",
            "logo": "play_game_logos/bb359cf8787c91ac5b5cd3650f4dbdf1.jpg",
            "hours": "12h",
            "year": "2006",
            'rate': '8.3/',
            "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
            "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/God Hand (USA).iso",
            "nome": "God Hand (USA).iso",
            "cardName": "card40",
            "cardd": document.getElementById('cardd41')
        },
        {
            'id': '31',
            'titulo': 'Midnight Club 3: DUB Edition',
            "desc": "Corridas de rua velozes com foco total em personalização e estilo. Escolha entre carros, SUVs e motos licenciadas para dominar as ruas de diversas cidades reais.",
            "capa": "covers/covers_ps2/Midnight-Club-3-Dub-Edition.jpg",
            "background": "backgrounds/hq720.jpg",
            "logo": "play_game_logos/250322c11b0904963ff79ead8aeffc91.png",
            "hours": "18h",
            "year": "2005",
            'rate': '8.3/',
            "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
            "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Midnight Club 3 - DUB Edition (USA) (v2.00).iso",
            "nome": "Midnight Club 3 - DUB Edition (USA) (v2.00).iso",
            "cardName": "card41",
            "cardd": document.getElementById('cardd42')
        },
        {
            'id': '32',
            'titulo': 'Naruto Shippuden: Ultimate Ninja 5',
            "desc": "O ápice da série no console, com um modo aventura extenso e o maior elenco de ninjas, trazendo batalhas intensas fiéis ao anime de sucesso.",
            "capa": "covers/covers_ps2/Naruto-Shippuden-Ultimate-Ninja-5.jpg",
            "background": "backgrounds/Naruto-Shippuden-Ultimate-Ninja-5.webp",
            "logo": "play_game_logos/croppedimage1201631-naruto-shippuden-ultimate-ninja-5-image.jpg",
            "hours": "12h",
            "year": "2007",
            'rate': '8.2/',
            "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
            "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/NSUN5 Lat [Beta 5] [NTSC].iso",
            "nome": "NSUN5 Lat [Beta 5] [NTSC].iso",
            "cardName": "card42",
            "cardd": document.getElementById('cardd43')
        },
        {
            'id': '33',
            'titulo': 'WWE SmackDown vs. Raw 2011',
            "desc": "Com física de objetos aprimorada e o modo 'Road to WrestleMania', este título oferece uma experiência completa e dinâmica de wrestling profissional.",
            "capa": "covers/covers_ps2/ps2_wwe_smackdown_vs_raw_2011-110214.jpg",
            "background": "backgrounds/smackdown-vs-raw-2011-wallpaper-1280x800.jpg",
            "logo": "play_game_logos/WWE_SmackDown_vs._Raw_2011_Logo.jpg",
            "hours": "12h",
            "year": "2010",
            'rate': '8.2/',
            "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
            "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/WWE SmackDown vs. Raw 2011 (USA) (EnFrEs).iso",
            "nome": "WWE SmackDown vs. Raw 2011 (USA) (EnFrEs).iso",
            "cardName": "card43",
            "cardd": document.getElementById('cardd44')
        },
        {
            'id': '34',
            'titulo': 'Spider-Man (2002 Movie Game)',
            "desc": "Inspirado no primeiro filme de Sam Raimi, assuma o manto do Homem-Aranha, use suas teias para balançar pela cidade e enfrente o terrível Duende Verde.",
            "capa": "covers/covers_ps2/Spider-Man.jpg",
            "background": "backgrounds/hqa720.jpg",
            "logo": "play_game_logos/spider-man_lob_log_def_01.png",
            "hours": "6h",
            "year": "2002",
            'rate': '8.2/',
            "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
            "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Spider-Man (USA) (v2.01).iso",
            "nome": "Spider-Man (USA) (v2.01).iso",
            "cardName": "card44",
            "cardd": document.getElementById('cardd45')
        },
        {
            'id': '35',
            'titulo': 'Sengoku Basara 2 Heroes',
            "desc": "Ação frenética no estilo musou ambientada no Japão feudal. Escolha entre heróis lendários e enfrente exércitos inteiros com ataques especiais exagerados e cinematográficos.",
            "capa": "covers/covers_ps2/1618689819-3a3ba2b9-c123-4da3-a604-c7e4246c16dd.jpg",
            "background": "backgrounds/141610501592981533.jpg",
            "logo": "play_game_logos/SB2H.webp",
            "hours": "10h",
            "year": "2007",
            'rate': '8.1/',
            "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
            "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Sengoku Basara 2 - Heroes (Japan).iso",
            "nome": "Sengoku Basara 2 - Heroes (Japan).iso",
            "cardName": "card45",
            "cardd": document.getElementById('cardd46')
        },
        {
            'id': '36',
            'titulo': 'Onimusha: Dawn of Dreams',
            "desc": "Um épico de ação samurai contra demônios. Com múltiplos personagens jugáveis e um sistema de combate refinado, lute para impedir a ambição de um governante maligno.",
            "capa": "covers/covers_ps2/139ceab8-9b54-47e7-8297-256fbf22c51b.jpg",
            "background": "backgrounds/what-are-your-thoughts-on-onimusha-dawn-of-dreams-v0-gur0ysj7dqqe1.webp",
            "logo": "play_game_logos/57e6a07b-532c-4243-91f2-5b4c7e8f7569.png",
            "hours": "16h",
            "year": "2006",
            'rate': '7.9/',
            "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
            "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Onimusha - Dawn of Dreams (USA) (Disc 2).iso",
            "nome": "Onimusha - Dawn of Dreams (USA) (Disc 2).iso",
            "cardName": "card46",
            "cardd": document.getElementById('cardd47')
        },
        {
            'id': '37',
            'titulo': 'Mortal Kombat: Armageddon',
            "desc": "Reunindo quase todos os personagens da história da franquia, este jogo apresenta o modo Konquest, Kreate-a-Fighter e um sistema de Fatalities customizáveis.",
            "capa": "covers/covers_ps2/Mortal-Kombat-Armageddon1.jpg",
            "background": "backgrounds/20c99c680bff19bd1d0925e3aeb26f86.jpg",
            "logo": "play_game_logos/Mka_logo.png",
            "hours": "7h",
            "year": "2006",
            'rate': '7.9/',
            "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
            "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Mortal Kombat - Armageddon (USA).iso",
            "nome": "Mortal Kombat - Armageddon (USA).iso",
            "cardName": "card47",
            "cardd": document.getElementById('cardd48')
        },
 {
        'id': '38',
        'titulo': 'Need for Speed: Carbon',
        "desc": "Domine territórios em corridas noturnas e enfrente duelos perigosos em desfiladeiros. Monte sua equipe e use habilidades específicas para vencer seus rivais e conquistar a cidade.",
        "capa": "covers/covers_ps2/Need-for-Speed-Carbon.jpg",
        "background": "backgrounds/771f705223826e116ce54153b8f1268a.png",
        "logo": "play_game_logos/Need_for_Speed_Carbon_Logo.png",
        "hours": "10h",
        "year": "2006",
        'rate': '7.9/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Need for Speed - Carbon (USA).iso",
        "nome": "Need for Speed - Carbon (USA).iso",
        "cardName": "card48",
        "cardd": document.getElementById('cardd49')
    },
    {
        'id': '39',
        'titulo': 'Tekken 4',
        "desc": "Introduzindo cenários interativos com paredes e mudanças táticas, este capítulo foca em uma narrativa mais profunda e um estilo de luta mais cadenciado e técnico.",
        "capa": "covers/covers_ps2/tekken-41.jpg",
        "background": "backgrounds/maxresassdefault.jpg",
        "logo": "play_game_logos/Tekken_4.webp",
        "hours": "2h",
        "year": "2002",
        'rate': '7.9/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Tekken 4 (USA).iso",
        "nome": "Tekken 4 (USA).iso",
        "cardName": "card49",
        "cardd": document.getElementById('cardd50')
    },
    {
        'id': '40',
        'titulo': 'Jet Li: Rise to Honor',
        "desc": "Um jogo de ação cinematográfico que usa o analógico direito para combates de artes marciais fluidos. Viva a experiência de um filme de Jet Li.",
        "capa": "covers/covers_ps2/1618688574-f95e2031-e74f-4a5c-a7aa-b111020d3aa6.jpg",
        "background": "backgrounds/risetohonor.jpg",
        "logo": "play_game_logos/jet-li-rise-to-honor-logo-altar-of-gaming-300x150.avif",
        "hours": "5h",
        "year": "2004",
        'rate': '7.7/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Jet Li - Rise to Honor (USA) (EnZh).iso",
        "nome": "Jet Li - Rise to Honor (USA) (EnZh).iso",
        "cardName": "card50",
        "cardd": document.getElementById('cardd51')
    },
    {
        'id': '41',
        'titulo': 'PES 2011: Pro Evolution Soccer',
        "desc": "Trazendo maior controle sobre passes e fintas, este título foca no realismo tático e na liberdade de movimento para os entusiastas do futebol virtual.",
        "capa": "covers/covers_ps2/Pro_Evolution_Soccer_2011_cover.PNG",
        "background": "backgrounds/sddefault.jpg",
        "logo": "play_game_logos/png-clipart-pro-evolution-soccer-2011-pro-evolution-soccer-2012-playstation-2-pro-evolution-soccer-2013-pro-evolution-soccer-2009-pes-evolution-pc-game.png",
        "hours": "15h",
        "year": "2010",
        'rate': '7.7/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/PES 2011 - Pro Evolution Soccer (USA).iso",
        "nome": "PES 2011 - Pro Evolution Soccer (USA).iso",
        "cardName": "card51",
        "cardd": document.getElementById('cardd52')
    },
    {
        'id': '42',
        'titulo': 'Driver: Parallel Lines',
        "desc": "Ambientado em duas eras diferentes da cidade de Nova York, este jogo de ação e direção foca em uma história de vingança ao longo de décadas.",
        "capa": "covers/covers_ps2/Driver-Parallel-Lines.jpg",
        "background": "backgrounds/hsaseader.jpg",
        "logo": "play_game_logos/419e123873b2b5e3e568c9624a49d153.png",
        "hours": "11h",
        "year": "2006",
        'rate': '7.4/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Driver - Parallel Lines (USA).iso",
        "nome": "Driver - Parallel Lines (USA).iso",
        "cardName": "card52",
        "cardd": document.getElementById('cardd53')
    },
    {
        'id': '43',
        'titulo': 'Battlefield 2 modern combat',
        "desc": "Experimente a intensidade da guerra moderna com troca rápida entre soldados no campo de batalha e uma variedade de veículos e armas militares realistas.",
        "capa": "covers/covers_ps2/Battlefield-2-Modern-Combat.jpg",
        "background": "backgrounds/apps.53131.64648147706054003.62d53153-d74f-4a99-bdc7-5f472240ffc8.jpg",
        "logo": "play_game_logos/Battlefield_2_Modern_Combat_Logo.svg.png",
        "hours": "9h",
        "year": "2005",
        'rate': '7.2/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Battlefield 2 - Modern Combat (USA).iso",
        "nome": "Battlefield 2 - Modern Combat (USA).iso",
        "cardName": "card53",
        "cardd": document.getElementById('cardd54')
    },
    {
        'id': '44',
        'titulo': 'Disney•Pixar Cars',
        "desc": "Baseado no filme da Pixar, participe de corridas em Radiator Springs com Relâmpago McQueen e seus amigos em uma aventura divertida para todas as idades.",
        "capa": "covers/covers_ps2/Disney-Pixar-Cars.jpg",
        "background": "backgrounds/de3vatk-34f70f44-213d-4ce9-9ce2-853584a16d95.jpg",
        "logo": "play_game_logos/disney-and-pixar-cars-logo-png-transparent.png",
        "hours": "7h",
        "year": "2006",
        'rate': '7.1/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Disney-Pixar Cars (USA).iso",
        "nome": "Disney-Pixar Cars (USA).iso",
        "cardName": "card54",
        "cardd": document.getElementById('cardd55')
    },
    {
        'id': '45',
        'titulo': 'Crash Nitro Kart',
        "desc": "O marsupial favorito volta às pistas para enfrentar uma ameaça alienígena. Use armas, derrapagens e muita velocidade para vencer os campeonatos de kart.",
        "capa": "covers/covers_ps2/Crash-Nitro-Kart.jpg",
        "background": "backgrounds/aa6f35de-a79d-432b-892a-7f5c052e1171.jpg",
        "logo": "play_game_logos/deh6zga-704db6b8-cc41-4fbe-9893-9b530b4378f5.png",
        "hours": "5h",
        "year": "2003",
        'rate': '7.1/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Crash Nitro Kart (USA).iso",
        "nome": "Crash Nitro Kart (USA).iso",
        "cardName": "card55",
        "cardd": document.getElementById('cardd56')
    },
    {
        'id': '46',
        'titulo': 'Crash Bandicoot: The Wrath of Cortex',
        "desc": "Crash deve deter o novo experimento do Dr. Neo Cortex, Crunch, atravessando fases de plataforma clássicas com a ajuda de novos poderes de máscaras elementais.",
        "capa": "covers/covers_ps2/Crash-Bandicoot-3-in-1.jpg",
        "background": "backgrounds/WrathofCortex.avif",
        "logo": "play_game_logos/crash_logo.png",
        "hours": "7h",
        "year": "2001",
        'rate': '7.1/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Crash Bandicoot - The Wrath of Cortex (USA) (v1.01).iso",
        "nome": "Crash Bandicoot - The Wrath of Cortex (USA) (v1.01).iso",
        "cardName": "card56",
        "cardd": document.getElementById('cardd57')
    },
    {
        'id': '47',
        'titulo': 'SEGA Superstars Tennis',
        "desc": "Sega Superstars Tennis une Sonic e ícones da marca em partidas frenéticas com poderes especiais e minijogos clássicos. É um título vibrante e nostálgico, perfeito para a diversão multiplayer no PlayStation 2.",
        "capa": "covers/covers_ps2/712yqCDPnaL._AC_UF1000,1000_QL80_.jpg",
        "background": "backgrounds/hq7sasassa20.jpg",
        "logo": "play_game_logos/sonic.webp",
        "hours": "15h",
        "year": "2008",
        'rate': '7.0/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Sega Superstars Tennis (USA) (En,Fr,De,Es,It).iso",
        "nome": "Sega Superstars Tennis (USA) (En,Fr,De,Es,It).iso",
        "cardName": "card57",
        "cardd": document.getElementById('cardd58')
    },
    {
        'id': '48',
        'titulo': 'Call of Duty: World at War – Final Fronts',
        "desc": "Focado exclusivamente no cenário da Segunda Guerra Mundial, oferece campanhas intensas no Pacífico e na Europa sob a perspectiva de soldados aliados.",
        "capa": "covers/covers_ps2/Final_Fronts_cover.png",
        "background": "backgrounds/a4f01d63-077f-407b-9996-55c742feb1cf.png",
        "logo": "play_game_logos/Call_of_Duty_World_at_War_-_Final_Fronts_-_Logo.png",
        "hours": "6h",
        "year": "2008",
        'rate': '6.2/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Call of Duty - World at War - Final Fronts (USA) (EnFr).iso",
        "nome": "Call of Duty - World at War - Final Fronts (USA) (EnFr).iso",
        "cardName": "card58",
        "cardd": document.getElementById('cardd59')
    },
    {
        'id': '49',
        'titulo': 'Devil May Cry 2',
        "desc": "Dante retorna ao lado de uma nova parceira, Lucia, para enfrentar uma ameaça corporativa demoníaca em uma jornada focada em acrobacias e ação estilizada.",
        "capa": "covers/covers_ps2/Devil-May-Cry-2.jpg",
        "background": "backgrounds/20bae77f9ac3daf8d22d483ad2225c8b.png",
        "logo": "play_game_logos/DMC2Logorenderbyag30fm4dn3ss.webp",
        "hours": "6h",
        "year": "2003",
        'rate': '6.1/',
        "rateGray": '<span class="rateGray" id="rateGray1">10 | </span> <span id="playGameHolderRateYear">',
        "caminho": "ps2_emulator/PS2/JOGOS PS2/JOGOS PRONTOS PS2/Devil May Cry 2 (USA) (Disc 1).iso",
        "nome": "Devil May Cry 2 (USA) (Disc 1).iso",
        "cardName": "card59",
        "cardd": document.getElementById('cardd60')
    },

];


catalogo_ps1[6].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Resident Evil 2 (USA) (Disc 1).chd';
catalogo_ps1[7].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Gran Turismo 2 (USA) (Arcade Mode).chd';
catalogo_ps1[8].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Driver 2 - Back on the Streets (Europe) (Disc 1).chd';
catalogo_ps1[9].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Koudelka (USA) (Disc 3).chd';
catalogo_ps1[10].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Crash Bandicoot (USA).chd';
catalogo_ps1[11].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Parasite Eve II (Spain) (Disc 2).chd';
catalogo_ps1[12].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Tekken 3 (USA).chd';
catalogo_ps1[13].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/MediEvil (USA).chd';
catalogo_ps1[14].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Syphon Filter 2 (USA) (Disc 1).chd';
catalogo_ps1[15].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Fear Effect (USA) (Disc 1).chd';
catalogo_ps1[16].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Resident Evil 3 - Nemesis (USA).chd';
catalogo_ps1[17].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Dino Crisis (USA).chd';
catalogo_ps1[18].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Racing (USA) (EnFrEs).chd';
catalogo_ps1[19].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/X-Files The (USA) (Disc 1).chd';
catalogo_ps1[20].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Heart of Darkness (USA) (Disc 1).chd';
catalogo_ps1[21].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Mortal Kombat Trilogy (USA).chd';
catalogo_ps1[22].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Alone in the Dark - The New Nightmare (USA) (Disc 1).chd';
catalogo_ps1[23].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Silent Hill (USA).chd';
catalogo_ps1[24].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Legend of Dragoon The (USA) (Disc 1).chd';
catalogo_ps1[25].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Tomb Raider III - Adventures of Lara Croft (USA).chd';
catalogo_ps1[26].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Fear Effect 2 - Retro Helix (USA) (Disc 1).chd';
catalogo_ps1[27].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Galerians (USA) (Disc 1).chd';
catalogo_ps1[28].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/D (USA) (Disc 1).chd';
catalogo_ps1[29].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Vigilante 8 (USA) (Rev 1).chd';
catalogo_ps1[30].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Dino Crisis 2 (USA).chd';
catalogo_ps1[31].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Spyro the Dragon (USA).chd';
catalogo_ps1[32].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Gran Turismo (USA).chd';
catalogo_ps1[33].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Riven - The Sequel to Myst (USA) (Disc 5).chd';
catalogo_ps1[34].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Jackie Chan Stuntmaster (USA).chd';
catalogo_ps1[35].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Street Fighter Collection (USA) (Disc 1).chd';
catalogo_ps1[36].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Medal of Honor (USA).chd';
catalogo_ps1[37].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Spider-Man 2 - Enter - Electro (USA).chd';
catalogo_ps1[38].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Tomb Raider II - Starring Lara Croft (USA) (Rev 2).chd';
catalogo_ps1[39].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Blade (USA).chd';
catalogo_ps1[40].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Crash Bandicoot 2 - Cortex Strikes Back (USA).chd';
catalogo_ps1[41].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Doom (USA).chd';
catalogo_ps1[42].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Pac-Man World - 20th Anniversary (USA).chd';
catalogo_ps1[43].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Yu-Gi-Oh Forbidden Memories (Europe).chd';
catalogo_ps1[44].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Legacy of Kain - Soul Reaver (USA).chd';
catalogo_ps1[45].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Tekken 2 (USA).chd';
catalogo_ps1[46].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/One (USA).chd';
catalogo_ps1[47].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Star Ocean - The Second Story (USA) (Disc 2).chd';
catalogo_ps1[48].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Parasite Eve (USA) (Disc 1).chd';
catalogo_ps1[49].caminho = 'duckstation/JOGOS PS1/JOGOS PRONTOS PS1/Command Conquer (USA) (Disc 1) (GDI).chd';
catalogo_ps1[6].nome = 'Resident Evil 2 (USA) (Disc 1).chd';
catalogo_ps1[7].nome = 'Gran Turismo 2 (USA) (Arcade Mode).chd';
catalogo_ps1[8].nome = 'Driver 2 - Back on the Streets (Europe) (Disc 1).chd';
catalogo_ps1[9].nome = 'Koudelka (USA) (Disc 3).chd';
catalogo_ps1[10].nome = 'Crash Bandicoot (USA).chd';
catalogo_ps1[11].nome = 'Parasite Eve II (Spain) (Disc 2).chd';
catalogo_ps1[12].nome = 'Tekken 3 (USA).chd';
catalogo_ps1[13].nome = 'MediEvil (USA).chd';
catalogo_ps1[14].nome = 'Syphon Filter 2 (USA) (Disc 1).chd';
catalogo_ps1[15].nome = 'Fear Effect (USA) (Disc 1).chd';
catalogo_ps1[16].nome = 'Resident Evil 3 - Nemesis (USA).chd';
catalogo_ps1[17].nome = 'Dino Crisis (USA).chd';
catalogo_ps1[18].nome = 'Racing (USA) (EnFrEs).chd';
catalogo_ps1[19].nome = 'X-Files The (USA) (Disc 1).chd';
catalogo_ps1[20].nome = 'Heart of Darkness (USA) (Disc 1).chd';
catalogo_ps1[21].nome = 'Mortal Kombat Trilogy (USA).chd';
catalogo_ps1[22].nome = 'Alone in the Dark - The New Nightmare (USA) (Disc 1).chd';
catalogo_ps1[23].nome = 'Silent Hill (USA).chd';
catalogo_ps1[24].nome = 'Legend of Dragoon The (USA) (Disc 1).chd';
catalogo_ps1[25].nome = 'Tomb Raider III - Adventures of Lara Croft (USA).chd';
catalogo_ps1[26].nome = 'Fear Effect 2 - Retro Helix (USA) (Disc 1).chd';
catalogo_ps1[27].nome = 'Galerians (USA) (Disc 1).chd';
catalogo_ps1[28].nome = 'D (USA) (Disc 1).chd';
catalogo_ps1[29].nome = 'Vigilante 8 (USA) (Rev 1).chd';
catalogo_ps1[30].nome = 'Dino Crisis 2 (USA).chd';
catalogo_ps1[31].nome = 'Spyro the Dragon (USA).chd';
catalogo_ps1[32].nome = 'Gran Turismo (USA).chd';
catalogo_ps1[33].nome = 'Riven - The Sequel to Myst (USA) (Disc 5).chd';
catalogo_ps1[34].nome = 'Jackie Chan Stuntmaster (USA).chd';
catalogo_ps1[35].nome = 'Street Fighter Collection (USA) (Disc 1).chd';
catalogo_ps1[36].nome = 'Medal of Honor (USA).chd';
catalogo_ps1[37].nome = 'Spider-Man 2 - Enter - Electro (USA).chd';
catalogo_ps1[38].nome = 'Tomb Raider II - Starring Lara Croft (USA) (Rev 2).chd';
catalogo_ps1[39].nome = 'Blade (USA).chd';
catalogo_ps1[40].nome = 'Crash Bandicoot 2 - Cortex Strikes Back (USA).chd';
catalogo_ps1[41].nome = 'Doom (USA).chd';
catalogo_ps1[42].nome = 'Pac-Man World - 20th Anniversary (USA).chd';
catalogo_ps1[43].nome = 'Yu-Gi-Oh Forbidden Memories (Europe).chd';
catalogo_ps1[44].nome = 'Legacy of Kain - Soul Reaver (USA).chd';
catalogo_ps1[45].nome = 'Tekken 2 (USA).chd';
catalogo_ps1[46].nome = 'One (USA).chd';
catalogo_ps1[47].nome = 'Star Ocean - The Second Story (USA) (Disc 2).chd';
catalogo_ps1[48].nome = 'Parasite Eve (USA) (Disc 1).chd';
catalogo_ps1[49].nome = 'Command Conquer (USA) (Disc 1) (GDI).chd';

// --- FOCO INICIAL ---
// --- FOCO INICIAL ---
// --- FOCO INICIAL ---
// --- FOCO INICIAL ---
// --- FOCO INICIAL ---
// --- FOCO INICIAL ---
// --- FOCO INICIAL ---
window.addEventListener('load', () => {
    setTimeout(() => {
        const primeiroCard = document.querySelector('#card1');
        if (primeiroCard) {
            primeiroCard.focus();
        }
    }, 100); 
});
//AUDIOS
//AUDIOS
//AUDIOS
//AUDIOS
//AUDIOS
//AUDIOS
//AUDIOS
//AUDIOS
//AUDIOS
const sMovingCard = document.getElementById('s-moving-card');
const sEnterMenu = document.getElementById('s-enter-menu');
const sLeaveMenu = document.getElementById('s-leave-menu');
const sJoinGame = document.getElementById('s-join-game');
const sLeavingGame = document.getElementById('s-leaving-game');
const sPing = document.getElementById('s-ping');
//CURRENT TIME
//CURRENT TIME
//CURRENT TIME
//CURRENT TIME
//CURRENT TIME
//CURRENT TIME
//CURRENT TIME
//CURRENT TIME
//CURRENT TIME
sMovingCard.currentTime = 0;
sEnterMenu.currentTime = 0;
sLeaveMenu.currentTime = 0;
sJoinGame.currentTime = 0;
sLeavingGame.currentTime = 0;
sPing.currentTime = 0;
//DEFINIÇÃO DE VARIAVEIS
//DEFINIÇÃO DE VARIAVEIS
//DEFINIÇÃO DE VARIAVEIS
//DEFINIÇÃO DE VARIAVEIS
//DEFINIÇÃO DE VARIAVEIS
//DEFINIÇÃO DE VARIAVEIS
//DEFINIÇÃO DE VARIAVEIS
//DEFINIÇÃO DE VARIAVEIS
//DEFINIÇÃO DE VARIAVEIS
const frame2 = document.getElementById('frame2')
const iframe2 = document.getElementById('iframe2')
const tr = document.querySelector('.TR')
const testezada = document.querySelector('.testezada')
const desinstalar = document.querySelector('.desinstalar')
const desinstalar11 = document.getElementById('desinstalar11');
const desinstalar12 = document.getElementById('desinstalar12');
const desinstalar13 = document.getElementById('desinstalar13');
const desinstalar14 = document.getElementById('desinstalar14');
const desinstalar15 = document.getElementById('desinstalar15');
const desinstalar16 = document.getElementById('desinstalar16');
const desinstalar17 = document.getElementById('desinstalar17');
const desinstalar18 = document.getElementById('desinstalar18');
const desinstalar19 = document.getElementById('desinstalar19');
const desinstalar20 = document.getElementById('desinstalar20');
const testezada1 = document.getElementById('testezada1');
const testezada2 = document.getElementById('testezada2');
const testezada3 = document.getElementById('testezada3');
const testezada4 = document.getElementById('testezada4');
const testezada5 = document.getElementById('testezada5');
const testezada6 = document.getElementById('testezada6');
const testezada7 = document.getElementById('testezada7');
const testezada8 = document.getElementById('testezada8');
const testezada9 = document.getElementById('testezada9');
const testezada10 = document.getElementById('testezada10');
const testezada11 = document.getElementById('testezada11');
const testezada12 = document.getElementById('testezada12');
const testezada13 = document.getElementById('testezada13');
const testezada14 = document.getElementById('testezada14');
const testezada15 = document.getElementById('testezada15');
const testezada16 = document.getElementById('testezada16');
const testezada17 = document.getElementById('testezada17');
const testezada18 = document.getElementById('testezada18');
const testezada19 = document.getElementById('testezada19');
const testezada20 = document.getElementById('testezada20');
const testezada21 = document.getElementById('testezada21');
const testezada22 = document.getElementById('testezada22');
const testezada23 = document.getElementById('testezada23');
const testezada24 = document.getElementById('testezada24');
const testezada25 = document.getElementById('testezada25');
const testezada26 = document.getElementById('testezada26');
const testezada27 = document.getElementById('testezada27');
const testezada28 = document.getElementById('testezada28');
const testezada29 = document.getElementById('testezada29');
const testezada30 = document.getElementById('testezada30');
const testezada31 = document.getElementById('testezada31');
const testezada32 = document.getElementById('testezada32');
const testezada33 = document.getElementById('testezada33');
const testezada34 = document.getElementById('testezada34');
const testezada35 = document.getElementById('testezada35');
const testezada36 = document.getElementById('testezada36');
const testezada37 = document.getElementById('testezada37');
const testezada38 = document.getElementById('testezada38');
const testezada39 = document.getElementById('testezada39');
const testezada40 = document.getElementById('testezada40');
const testezada41 = document.getElementById('testezada41');
const testezada42 = document.getElementById('testezada42');
const testezada43 = document.getElementById('testezada43');
const testezada44 = document.getElementById('testezada44');
const testezada45 = document.getElementById('testezada45');
const testezada46 = document.getElementById('testezada46');
const testezada47 = document.getElementById('testezada47');
const testezada48 = document.getElementById('testezada48');
const testezada49 = document.getElementById('testezada49');
const testezada50 = document.getElementById('testezada50');
const testezada51 = document.getElementById('testezada51');
const testezada52 = document.getElementById('testezada52');
const testezada53 = document.getElementById('testezada53');
const testezada54 = document.getElementById('testezada54');
const testezada55 = document.getElementById('testezada55');
const testezada56 = document.getElementById('testezada56');
const testezada57 = document.getElementById('testezada57');
const testezada58 = document.getElementById('testezada58');
const testezada59 = document.getElementById('testezada59');
const testezada60 = document.getElementById('testezada60');
const frame = document.getElementById('frame')
const iframe = document.getElementById('iframe')
const frameHolder = document.getElementById('frameHolder')
const frameHolderBack = document.getElementById('frameHolderBack')
const background = document.querySelector('#background')
const card = document.querySelector('.card')
const header = document.getElementById('header')
const headerMenu = document.getElementById('headerMenu');
const menuHome = document.getElementById('menuHome')
const menu = document.getElementById('menu');
const menuHolder = document.getElementById('menuHolder');
const botaoLibrary = document.getElementById("libraryButton")
const botaoInfo = document.getElementById("infoButton")
const botaoSearch = document.getElementById("searchButton")
const library = document.getElementById("library")
const libraryBack = document.getElementById("libraryBack")
const config = document.getElementById("config")
const configBackButton = document.getElementById("configBackButton")
const menuConfig = document.getElementById("menuConfig")
const menuExit = document.getElementById("menuExit")
const info = document.getElementById("info")
const search = document.getElementById("search")
const body = document.body
const imgElemento = document.getElementById('backgroundImg');
const playGameBack = document.querySelector('#playGameBack')
const searchPs1HolderBack = document.querySelector('#searchPs1HolderBack');
const searchPlataformsButtonPs1 = document.querySelector('#searchPlataformsButtonPs1');
const searchPlataformsButton = document.querySelector('.searchPlataformsButton');
const searchPs1Holder = document.querySelector('#searchPs1Holder');
const searchPs1HolderOrderButtonSize = document.getElementById('searchPs1HolderOrderButtonSize')
const searchPs2HolderOrderButtonSize = document.getElementById('searchPs2HolderOrderButtonSize')
const searchPs3HolderOrderButtonSize = document.getElementById('searchPs3HolderOrderButtonSize')
const searchXbox360HolderOrderButtonSize = document.getElementById('searchXbox360HolderOrderButtonSize')
const playGame = document.querySelector('#playGame');
const playGameHolderDesc = document.querySelector('#playGameHolderDesc')
const rateGray2 = document.querySelector('#rateGray2')
const rateGray1 = document.querySelector('#rateGray1')
const rate = document.querySelector('#rate')
const playGameHolderRateYear = document.querySelector('#playGameHolderRateYear')
const playGameHolderTitleImg = document.querySelector("#playGameHolderTitleImg")
const playGameHolderTitle = document.querySelector("#playGameHolderTitle")
const playGameBackground = document.querySelector("#playGameBackground")
const playGameHolderButton = document.querySelector('#playGameHolderButton')
const playGameHolderButton11 = document.querySelector('#playGameHolderButton11')
const playGameHolderButton12 = document.querySelector('#playGameHolderButton12');
const playGameHolderButton13 = document.querySelector('#playGameHolderButton13');
const playGameHolderButton14 = document.querySelector('#playGameHolderButton14');
const playGameHolderButton15 = document.querySelector('#playGameHolderButton15');
const playGameHolderButton16 = document.querySelector('#playGameHolderButton16');
const playGameHolderButton17 = document.querySelector('#playGameHolderButton17');
const playGameHolderButton18 = document.querySelector('#playGameHolderButton18');
const playGameHolderButton19 = document.querySelector('#playGameHolderButton19');
const playGameHolderButton20 = document.querySelector('#playGameHolderButton20');
const playGameHolderButton21 = document.querySelector('#playGameHolderButton21');
const playGameHolderButton22 = document.querySelector('#playGameHolderButton22');
const playGameHolderButton23 = document.querySelector('#playGameHolderButton23');
const playGameHolderButton24 = document.querySelector('#playGameHolderButton24');
const playGameHolderButton25 = document.querySelector('#playGameHolderButton25');
const playGameHolderButton26 = document.querySelector('#playGameHolderButton26');
const playGameHolderButton27 = document.querySelector('#playGameHolderButton27');
const playGameHolderButton28 = document.querySelector('#playGameHolderButton28');
const playGameHolderButton29 = document.querySelector('#playGameHolderButton29');
const playGameHolderButton30 = document.querySelector('#playGameHolderButton30');
const playGameHolderButton31 = document.querySelector('#playGameHolderButton31');
const playGameHolderButton32 = document.querySelector('#playGameHolderButton32');
const playGameHolderButton33 = document.querySelector('#playGameHolderButton33');
const playGameHolderButton34 = document.querySelector('#playGameHolderButton34');
const playGameHolderButton35 = document.querySelector('#playGameHolderButton35');
const playGameHolderButton36 = document.querySelector('#playGameHolderButton36');
const playGameHolderButton37 = document.querySelector('#playGameHolderButton37');
const playGameHolderButton38 = document.querySelector('#playGameHolderButton38');
const playGameHolderButton39 = document.querySelector('#playGameHolderButton39');
const playGameHolderButton40 = document.querySelector('#playGameHolderButton40');
const playGameHolderButton41 = document.querySelector('#playGameHolderButton41');
const playGameHolderButton42 = document.querySelector('#playGameHolderButton42');
const playGameHolderButton43 = document.querySelector('#playGameHolderButton43');
const playGameHolderButton44 = document.querySelector('#playGameHolderButton44');
const playGameHolderButton45 = document.querySelector('#playGameHolderButton45');
const playGameHolderButton46 = document.querySelector('#playGameHolderButton46');
const playGameHolderButton47 = document.querySelector('#playGameHolderButton47');
const playGameHolderButton48 = document.querySelector('#playGameHolderButton48');
const playGameHolderButton49 = document.querySelector('#playGameHolderButton49');
const playGameHolderButton50 = document.querySelector('#playGameHolderButton50');
const playGameHolderButton51 = document.querySelector('#playGameHolderButton51');
const playGameHolderButton52 = document.querySelector('#playGameHolderButton52');
const playGameHolderButton53 = document.querySelector('#playGameHolderButton53');
const playGameHolderButton54 = document.querySelector('#playGameHolderButton54');
const playGameHolderButton55 = document.querySelector('#playGameHolderButton55');
const playGameHolderButton56 = document.querySelector('#playGameHolderButton56');
const playGameHolderButton57 = document.querySelector('#playGameHolderButton57');
const playGameHolderButton58 = document.querySelector('#playGameHolderButton58');
const playGameHolderButton59 = document.querySelector('#playGameHolderButton59');
const playGameHolderButton60 = document.querySelector('#playGameHolderButton60');
const playGameHolderButton1 = document.querySelector('.playGameHolderButton1')
const playGameHolderButtonImg = document.querySelector('#playGameHolderButtonImg')
const searchBack = document.querySelector('#searchBack')
const searchBar = document.getElementById('searchBar')
const searchPlataforms = document.getElementById("searchPlataforms")
const searchHolder = document.getElementById("searchHolder")
const searchText = document.getElementById("searchText")
const nonee = document.getElementById("none")
const libraryPs1Card2 = document.getElementById('libraryPs1Card2');
const libraryPs1Card3 = document.getElementById('libraryPs1Card3');
const libraryPs1Card4 = document.getElementById('libraryPs1Card4');
const libraryPs1Card5 = document.getElementById('libraryPs1Card5');
const libraryPs1Card6 = document.getElementById('libraryPs1Card6');
const libraryPs1Card7 = document.getElementById('libraryPs1Card7');
const libraryPs1Card8 = document.getElementById('libraryPs1Card8');
const libraryPs1Card9 = document.getElementById('libraryPs1Card9');
const libraryPs1Card10 = document.getElementById('libraryPs1Card10');
const libraryPs1Card11 = document.getElementById('libraryPs1Card11');
const libraryPs1Card12 = document.getElementById('libraryPs1Card12');
const libraryPs1Card13 = document.getElementById('libraryPs1Card13');
const libraryPs1Card14 = document.getElementById('libraryPs1Card14');
const libraryPs1Card15 = document.getElementById('libraryPs1Card15');
const libraryPs1Card16 = document.getElementById('libraryPs1Card16');
const libraryPs1Card17 = document.getElementById('libraryPs1Card17');
const libraryPs1Card18 = document.getElementById('libraryPs1Card18');
const libraryPs1Card19 = document.getElementById('libraryPs1Card19');
const libraryPs1Card20 = document.getElementById('libraryPs1Card20');
const libraryPs1Card21 = document.getElementById('libraryPs1Card21');
const libraryPs1Card22 = document.getElementById('libraryPs1Card22');
const libraryPs1Card23 = document.getElementById('libraryPs1Card23');
const libraryPs1Card24 = document.getElementById('libraryPs1Card24');
const libraryPs1Card25 = document.getElementById('libraryPs1Card25');
const libraryPs1Card26 = document.getElementById('libraryPs1Card26');
const libraryPs1Card27 = document.getElementById('libraryPs1Card27');
const libraryPs1Card28 = document.getElementById('libraryPs1Card28');
const libraryPs1Card29 = document.getElementById('libraryPs1Card29');
const libraryPs1Card30 = document.getElementById('libraryPs1Card30');
const libraryPs1Card31 = document.getElementById('libraryPs1Card31');
const libraryPs1Card32 = document.getElementById('libraryPs1Card32');
const libraryPs1Card33 = document.getElementById('libraryPs1Card33');
const libraryPs1Card34 = document.getElementById('libraryPs1Card34');
const libraryPs1Card35 = document.getElementById('libraryPs1Card35');
const libraryPs1Card36 = document.getElementById('libraryPs1Card36');
const libraryPs1Card37 = document.getElementById('libraryPs1Card37');
const libraryPs1Card38 = document.getElementById('libraryPs1Card38');
const libraryPs1Card39 = document.getElementById('libraryPs1Card39');
const libraryPs1Card40 = document.getElementById('libraryPs1Card40');
const libraryPs1Card41 = document.getElementById('libraryPs1Card41');
const libraryPs1Card42 = document.getElementById('libraryPs1Card42');
const libraryPs1Card43 = document.getElementById('libraryPs1Card43');
const libraryPs1Card44 = document.getElementById('libraryPs1Card44');
const libraryPs1Card45 = document.getElementById('libraryPs1Card45');
const libraryPs1Card46 = document.getElementById('libraryPs1Card46');
const libraryPs1Card47 = document.getElementById('libraryPs1Card47');
const libraryPs1Card48 = document.getElementById('libraryPs1Card48');
const libraryPs1Card49 = document.getElementById('libraryPs1Card49');
const libraryPs1Card50 = document.getElementById('libraryPs1Card50');

//INERTS
frameHolder.inert = true
//INERTS
//INERTS
//INERTS
//INERTS
//INERTS
//INERTS

//DEFINIÇÃO DAS VARIAVEIS DAS CAPAS PRINCIPAIS DO GENFLIX
//DEFINIÇÃO DAS VARIAVEIS DAS CAPAS PRINCIPAIS DO GENFLIX
//DEFINIÇÃO DAS VARIAVEIS DAS CAPAS PRINCIPAIS DO GENFLIX
//DEFINIÇÃO DAS VARIAVEIS DAS CAPAS PRINCIPAIS DO GENFLIX
//DEFINIÇÃO DAS VARIAVEIS DAS CAPAS PRINCIPAIS DO GENFLIX
//DEFINIÇÃO DAS VARIAVEIS DAS CAPAS PRINCIPAIS DO GENFLIX
//DEFINIÇÃO DAS VARIAVEIS DAS CAPAS PRINCIPAIS DO GENFLIX
//DEFINIÇÃO DAS VARIAVEIS DAS CAPAS PRINCIPAIS DO GENFLIX
//DEFINIÇÃO DAS VARIAVEIS DAS CAPAS PRINCIPAIS DO GENFLIX
//DEFINIÇÃO DAS VARIAVEIS DAS CAPAS PRINCIPAIS DO GENFLIX


const card1 = document.getElementById('card1')
const card2 = document.getElementById('card2')
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');
const card6 = document.getElementById('card6');
const card7 = document.getElementById('card7');
const card8 = document.getElementById('card8');
const card9 = document.getElementById('card9');
const card10 = document.getElementById('card10');



const card11 = document.querySelector('#card11');
const card12 = document.querySelector('#card12');
const card13 = document.querySelector('#card13');
const card14 = document.querySelector('#card14');
const card15 = document.querySelector('#card15');
const card16 = document.querySelector('#card16');
const card17 = document.querySelector('#card17');
const card18 = document.querySelector('#card18');
const card19 = document.querySelector('#card19');
const card20 = document.querySelector('#card20');


const card1capa = document.querySelector('.card1capa')
const card2capa = document.querySelector('.card2capa')
const card3capa = document.querySelector('.card3capa');
const card4capa = document.querySelector('.card4capa');
const card5capa = document.querySelector('.card5capa');
const card6capa = document.querySelector('.card6capa');
const card7capa = document.querySelector('.card7capa');
const card8capa = document.querySelector('.card8capa');
const card9capa = document.querySelector('.card9capa');
const card10capa = document.querySelector('.card10capa');


const card11capa = document.querySelector('.card11capa')
const card12capa = document.querySelector('.card12capa')
const card13capa = document.querySelector('.card13capa');
const card14capa = document.querySelector('.card14capa');
const card15capa = document.querySelector('.card15capa');
const card16capa = document.querySelector('.card16capa');
const card17capa = document.querySelector('.card17capa');
const card18capa = document.querySelector('.card18capa');
const card19capa = document.querySelector('.card19capa');
const card20capa = document.querySelector('.card20capa');

const searchPs2Card1 = document.getElementById('searchPs2Card1');
const searchPs2Card2 = document.getElementById('searchPs2Card2');
const searchPs2Card3 = document.getElementById('searchPs2Card3');
const searchPs2Card4 = document.getElementById('searchPs2Card4');
const searchPs2Card5 = document.getElementById('searchPs2Card5');
const searchPs2Card6 = document.getElementById('searchPs2Card6');
const searchPs2Card7 = document.getElementById('searchPs2Card7');
const searchPs2Card8 = document.getElementById('searchPs2Card8');
const searchPs2Card9 = document.getElementById('searchPs2Card9');
const searchPs2Card10 = document.getElementById('searchPs2Card10');
const searchPs2Card11 = document.getElementById('searchPs2Card11');
const searchPs2Card12 = document.getElementById('searchPs2Card12');
const searchPs2Card13 = document.getElementById('searchPs2Card13');
const searchPs2Card14 = document.getElementById('searchPs2Card14');
const searchPs2Card15 = document.getElementById('searchPs2Card15');
const searchPs2Card16 = document.getElementById('searchPs2Card16');
const searchPs2Card17 = document.getElementById('searchPs2Card17');
const searchPs2Card18 = document.getElementById('searchPs2Card18');
const searchPs2Card19 = document.getElementById('searchPs2Card19');
const searchPs2Card20 = document.getElementById('searchPs2Card20');
const searchPs2Card21 = document.getElementById('searchPs2Card21');
const searchPs2Card22 = document.getElementById('searchPs2Card22');
const searchPs2Card23 = document.getElementById('searchPs2Card23');
const searchPs2Card24 = document.getElementById('searchPs2Card24');
const searchPs2Card25 = document.getElementById('searchPs2Card25');
const searchPs2Card26 = document.getElementById('searchPs2Card26');
const searchPs2Card27 = document.getElementById('searchPs2Card27');
const searchPs2Card28 = document.getElementById('searchPs2Card28');
const searchPs2Card29 = document.getElementById('searchPs2Card29');
const searchPs2Card30 = document.getElementById('searchPs2Card30');
const searchPs2Card31 = document.getElementById('searchPs2Card31');
const searchPs2Card32 = document.getElementById('searchPs2Card32');
const searchPs2Card33 = document.getElementById('searchPs2Card33');
const searchPs2Card34 = document.getElementById('searchPs2Card34');
const searchPs2Card35 = document.getElementById('searchPs2Card35');
const searchPs2Card36 = document.getElementById('searchPs2Card36');
const searchPs2Card37 = document.getElementById('searchPs2Card37');
const searchPs2Card38 = document.getElementById('searchPs2Card38');
const searchPs2Card39 = document.getElementById('searchPs2Card39');
const searchPs2Card40 = document.getElementById('searchPs2Card40');
const searchPs2Card41 = document.getElementById('searchPs2Card41');
const searchPs2Card42 = document.getElementById('searchPs2Card42');
const searchPs2Card43 = document.getElementById('searchPs2Card43');
const searchPs2Card44 = document.getElementById('searchPs2Card44');
const searchPs2Card45 = document.getElementById('searchPs2Card45');
const searchPs2Card46 = document.getElementById('searchPs2Card46');
const searchPs2Card47 = document.getElementById('searchPs2Card47');
const searchPs2Card48 = document.getElementById('searchPs2Card48');
const searchPs2Card49 = document.getElementById('searchPs2Card49');
const searchPs2Card50 = document.getElementById('searchPs2Card50');
const searchPs2Card1Capa = document.getElementById('searchPs2Card1Capa');
const searchPs2Card2Capa = document.getElementById('searchPs2Card2Capa');
const searchPs2Card3Capa = document.getElementById('searchPs2Card3Capa');
const searchPs2Card4Capa = document.getElementById('searchPs2Card4Capa');
const searchPs2Card5Capa = document.getElementById('searchPs2Card5Capa');
const searchPs2Card6Capa = document.getElementById('searchPs2Card6Capa');
const searchPs2Card7Capa = document.getElementById('searchPs2Card7Capa');
const searchPs2Card8Capa = document.getElementById('searchPs2Card8Capa');
const searchPs2Card9Capa = document.getElementById('searchPs2Card9Capa');
const searchPs2Card10Capa = document.getElementById('searchPs2Card10Capa');
const searchPs2Card11Capa = document.getElementById('searchPs2Card11Capa');
const searchPs2Card12Capa = document.getElementById('searchPs2Card12Capa');
const searchPs2Card13Capa = document.getElementById('searchPs2Card13Capa');
const searchPs2Card14Capa = document.getElementById('searchPs2Card14Capa');
const searchPs2Card15Capa = document.getElementById('searchPs2Card15Capa');
const searchPs2Card16Capa = document.getElementById('searchPs2Card16Capa');
const searchPs2Card17Capa = document.getElementById('searchPs2Card17Capa');
const searchPs2Card18Capa = document.getElementById('searchPs2Card18Capa');
const searchPs2Card19Capa = document.getElementById('searchPs2Card19Capa');
const searchPs2Card20Capa = document.getElementById('searchPs2Card20Capa');
const searchPs2Card21Capa = document.getElementById('searchPs2Card21Capa');
const searchPs2Card22Capa = document.getElementById('searchPs2Card22Capa');
const searchPs2Card23Capa = document.getElementById('searchPs2Card23Capa');
const searchPs2Card24Capa = document.getElementById('searchPs2Card24Capa');
const searchPs2Card25Capa = document.getElementById('searchPs2Card25Capa');
const searchPs2Card26Capa = document.getElementById('searchPs2Card26Capa');
const searchPs2Card27Capa = document.getElementById('searchPs2Card27Capa');
const searchPs2Card28Capa = document.getElementById('searchPs2Card28Capa');
const searchPs2Card29Capa = document.getElementById('searchPs2Card29Capa');
const searchPs2Card30Capa = document.getElementById('searchPs2Card30Capa');
const searchPs2Card31Capa = document.getElementById('searchPs2Card31Capa');
const searchPs2Card32Capa = document.getElementById('searchPs2Card32Capa');
const searchPs2Card33Capa = document.getElementById('searchPs2Card33Capa');
const searchPs2Card34Capa = document.getElementById('searchPs2Card34Capa');
const searchPs2Card35Capa = document.getElementById('searchPs2Card35Capa');
const searchPs2Card36Capa = document.getElementById('searchPs2Card36Capa');
const searchPs2Card37Capa = document.getElementById('searchPs2Card37Capa');
const searchPs2Card38Capa = document.getElementById('searchPs2Card38Capa');
const searchPs2Card39Capa = document.getElementById('searchPs2Card39Capa');
const searchPs2Card40Capa = document.getElementById('searchPs2Card40Capa');
const searchPs2Card41Capa = document.getElementById('searchPs2Card41Capa');
const searchPs2Card42Capa = document.getElementById('searchPs2Card42Capa');
const searchPs2Card43Capa = document.getElementById('searchPs2Card43Capa');
const searchPs2Card44Capa = document.getElementById('searchPs2Card44Capa');
const searchPs2Card45Capa = document.getElementById('searchPs2Card45Capa');
const searchPs2Card46Capa = document.getElementById('searchPs2Card46Capa');
const searchPs2Card47Capa = document.getElementById('searchPs2Card47Capa');
const searchPs2Card48Capa = document.getElementById('searchPs2Card48Capa');
const searchPs2Card49Capa = document.getElementById('searchPs2Card49Capa');
const searchPs2Card50Capa = document.getElementById('searchPs2Card50Capa');
const libraryPs2Capa11 = document.getElementById('libraryPs2Capa11');
const libraryPs2Capa12 = document.getElementById('libraryPs2Capa12');
const libraryPs2Capa13 = document.getElementById('libraryPs2Capa13');
const libraryPs2Capa14 = document.getElementById('libraryPs2Capa14');
const libraryPs2Capa15 = document.getElementById('libraryPs2Capa15');
const libraryPs2Capa16 = document.getElementById('libraryPs2Capa16');
const libraryPs2Capa17 = document.getElementById('libraryPs2Capa17');
const libraryPs2Capa18 = document.getElementById('libraryPs2Capa18');
const libraryPs2Capa19 = document.getElementById('libraryPs2Capa19');
const libraryPs2Capa20 = document.getElementById('libraryPs2Capa20');
const libraryPs2Capa21 = document.getElementById('libraryPs2Capa21');
const libraryPs2Capa22 = document.getElementById('libraryPs2Capa22');
const libraryPs2Capa23 = document.getElementById('libraryPs2Capa23');
const libraryPs2Capa24 = document.getElementById('libraryPs2Capa24');
const libraryPs2Capa25 = document.getElementById('libraryPs2Capa25');
const libraryPs2Capa26 = document.getElementById('libraryPs2Capa26');
const libraryPs2Capa27 = document.getElementById('libraryPs2Capa27');
const libraryPs2Capa28 = document.getElementById('libraryPs2Capa28');
const libraryPs2Capa29 = document.getElementById('libraryPs2Capa29');
const libraryPs2Capa30 = document.getElementById('libraryPs2Capa30');
const libraryPs2Capa31 = document.getElementById('libraryPs2Capa31');
const libraryPs2Capa32 = document.getElementById('libraryPs2Capa32');
const libraryPs2Capa33 = document.getElementById('libraryPs2Capa33');
const libraryPs2Capa34 = document.getElementById('libraryPs2Capa34');
const libraryPs2Capa35 = document.getElementById('libraryPs2Capa35');
const libraryPs2Capa36 = document.getElementById('libraryPs2Capa36');
const libraryPs2Capa37 = document.getElementById('libraryPs2Capa37');
const libraryPs2Capa38 = document.getElementById('libraryPs2Capa38');
const libraryPs2Capa39 = document.getElementById('libraryPs2Capa39');
const libraryPs2Capa40 = document.getElementById('libraryPs2Capa40');
const libraryPs2Capa41 = document.getElementById('libraryPs2Capa41');
const libraryPs2Capa42 = document.getElementById('libraryPs2Capa42');
const libraryPs2Capa43 = document.getElementById('libraryPs2Capa43');
const libraryPs2Capa44 = document.getElementById('libraryPs2Capa44');
const libraryPs2Capa45 = document.getElementById('libraryPs2Capa45');
const libraryPs2Capa46 = document.getElementById('libraryPs2Capa46');
const libraryPs2Capa47 = document.getElementById('libraryPs2Capa47');
const libraryPs2Capa48 = document.getElementById('libraryPs2Capa48');
const libraryPs2Capa49 = document.getElementById('libraryPs2Capa49');
const libraryPs2Capa50 = document.getElementById('libraryPs2Capa50');
const libraryPs2Capa51 = document.getElementById('libraryPs2Capa51');
const libraryPs2Capa52 = document.getElementById('libraryPs2Capa52');
const libraryPs2Capa53 = document.getElementById('libraryPs2Capa53');
const libraryPs2Capa54 = document.getElementById('libraryPs2Capa54');
const libraryPs2Capa55 = document.getElementById('libraryPs2Capa55');
const libraryPs2Capa56 = document.getElementById('libraryPs2Capa56');
const libraryPs2Capa57 = document.getElementById('libraryPs2Capa57');
const libraryPs2Capa58 = document.getElementById('libraryPs2Capa58');
const libraryPs2Capa59 = document.getElementById('libraryPs2Capa59');
const libraryPs2Capa60 = document.getElementById('libraryPs2Capa60');
searchPs2Card1Capa.src = catalogo_ps2[0]['capa']
searchPs2Card2Capa.src = catalogo_ps2[1]['capa']
searchPs2Card3Capa.src = catalogo_ps2[2]['capa']
searchPs2Card4Capa.src = catalogo_ps2[3]['capa']
searchPs2Card5Capa.src = catalogo_ps2[4]['capa']
searchPs2Card6Capa.src = catalogo_ps2[5]['capa']
searchPs2Card7Capa.src = catalogo_ps2[6]['capa']
searchPs2Card8Capa.src = catalogo_ps2[7]['capa']
searchPs2Card9Capa.src = catalogo_ps2[8]['capa']
searchPs2Card10Capa.src = catalogo_ps2[9]['capa']
searchPs2Card11Capa.src = catalogo_ps2[10]['capa']
searchPs2Card12Capa.src = catalogo_ps2[11]['capa']
searchPs2Card13Capa.src = catalogo_ps2[12]['capa']
searchPs2Card14Capa.src = catalogo_ps2[13]['capa']
searchPs2Card15Capa.src = catalogo_ps2[14]['capa']
searchPs2Card16Capa.src = catalogo_ps2[15]['capa']
searchPs2Card17Capa.src = catalogo_ps2[16]['capa']
searchPs2Card18Capa.src = catalogo_ps2[17]['capa']
searchPs2Card19Capa.src = catalogo_ps2[18]['capa']
searchPs2Card20Capa.src = catalogo_ps2[19]['capa']
searchPs2Card21Capa.src = catalogo_ps2[20]['capa']
searchPs2Card22Capa.src = catalogo_ps2[21]['capa']
searchPs2Card23Capa.src = catalogo_ps2[22]['capa']
searchPs2Card24Capa.src = catalogo_ps2[23]['capa']
searchPs2Card25Capa.src = catalogo_ps2[24]['capa']
searchPs2Card26Capa.src = catalogo_ps2[25]['capa']
searchPs2Card27Capa.src = catalogo_ps2[26]['capa']
searchPs2Card28Capa.src = catalogo_ps2[27]['capa']
searchPs2Card29Capa.src = catalogo_ps2[28]['capa']
searchPs2Card30Capa.src = catalogo_ps2[29]['capa']
searchPs2Card31Capa.src = catalogo_ps2[30]['capa']
searchPs2Card32Capa.src = catalogo_ps2[31]['capa']
searchPs2Card33Capa.src = catalogo_ps2[32]['capa']
searchPs2Card34Capa.src = catalogo_ps2[33]['capa']
searchPs2Card35Capa.src = catalogo_ps2[34]['capa']
searchPs2Card36Capa.src = catalogo_ps2[35]['capa']
searchPs2Card37Capa.src = catalogo_ps2[36]['capa']
searchPs2Card38Capa.src = catalogo_ps2[37]['capa']
searchPs2Card39Capa.src = catalogo_ps2[38]['capa']
searchPs2Card40Capa.src = catalogo_ps2[39]['capa']
searchPs2Card41Capa.src = catalogo_ps2[40]['capa']
searchPs2Card42Capa.src = catalogo_ps2[41]['capa']
searchPs2Card43Capa.src = catalogo_ps2[42]['capa']
searchPs2Card44Capa.src = catalogo_ps2[43]['capa']
searchPs2Card45Capa.src = catalogo_ps2[44]['capa']
searchPs2Card46Capa.src = catalogo_ps2[45]['capa']
searchPs2Card47Capa.src = catalogo_ps2[46]['capa']
searchPs2Card48Capa.src = catalogo_ps2[47]['capa']
searchPs2Card49Capa.src = catalogo_ps2[48]['capa']
searchPs2Card50Capa.src = catalogo_ps2[49]['capa']
libraryPs2Capa11.src = catalogo_ps2[0].capa;
libraryPs2Capa12.src = catalogo_ps2[1].capa;
libraryPs2Capa13.src = catalogo_ps2[2].capa;
libraryPs2Capa14.src = catalogo_ps2[3].capa;
libraryPs2Capa15.src = catalogo_ps2[4].capa;
libraryPs2Capa16.src = catalogo_ps2[5].capa;
libraryPs2Capa17.src = catalogo_ps2[6].capa;
libraryPs2Capa18.src = catalogo_ps2[7].capa;
libraryPs2Capa19.src = catalogo_ps2[8].capa;
libraryPs2Capa20.src = catalogo_ps2[9].capa;
libraryPs2Capa21.src = catalogo_ps2[10].capa;
libraryPs2Capa22.src = catalogo_ps2[11].capa;
libraryPs2Capa23.src = catalogo_ps2[12].capa;
libraryPs2Capa24.src = catalogo_ps2[13].capa;
libraryPs2Capa25.src = catalogo_ps2[14].capa;
libraryPs2Capa26.src = catalogo_ps2[15].capa;
libraryPs2Capa27.src = catalogo_ps2[16].capa;
libraryPs2Capa28.src = catalogo_ps2[17].capa;
libraryPs2Capa29.src = catalogo_ps2[18].capa;
libraryPs2Capa30.src = catalogo_ps2[19].capa;
libraryPs2Capa31.src = catalogo_ps2[20].capa;
libraryPs2Capa32.src = catalogo_ps2[21].capa;
libraryPs2Capa33.src = catalogo_ps2[22].capa;
libraryPs2Capa34.src = catalogo_ps2[23].capa;
libraryPs2Capa35.src = catalogo_ps2[24].capa;
libraryPs2Capa36.src = catalogo_ps2[25].capa;
libraryPs2Capa37.src = catalogo_ps2[26].capa;
libraryPs2Capa38.src = catalogo_ps2[27].capa;
libraryPs2Capa39.src = catalogo_ps2[28].capa;
libraryPs2Capa40.src = catalogo_ps2[29].capa;
libraryPs2Capa41.src = catalogo_ps2[30].capa;
libraryPs2Capa42.src = catalogo_ps2[31].capa;
libraryPs2Capa43.src = catalogo_ps2[32].capa;
libraryPs2Capa44.src = catalogo_ps2[33].capa;
libraryPs2Capa45.src = catalogo_ps2[34].capa;
libraryPs2Capa46.src = catalogo_ps2[35].capa;
libraryPs2Capa47.src = catalogo_ps2[36].capa;
libraryPs2Capa48.src = catalogo_ps2[37].capa;
libraryPs2Capa49.src = catalogo_ps2[38].capa;
libraryPs2Capa50.src = catalogo_ps2[39].capa;
libraryPs2Capa51.src = catalogo_ps2[40].capa;
libraryPs2Capa52.src = catalogo_ps2[41].capa;
libraryPs2Capa53.src = catalogo_ps2[42].capa;
libraryPs2Capa54.src = catalogo_ps2[43].capa;
libraryPs2Capa55.src = catalogo_ps2[44].capa;
libraryPs2Capa56.src = catalogo_ps2[45].capa;
libraryPs2Capa57.src = catalogo_ps2[46].capa;
libraryPs2Capa58.src = catalogo_ps2[47].capa;
libraryPs2Capa59.src = catalogo_ps2[48].capa;
libraryPs2Capa60.src = catalogo_ps2[49].capa;
const libraryPs1CardImg1 = document.getElementById('libraryPs1CardImg1');
const libraryPs1CardImg2 = document.getElementById('libraryPs1CardImg2');
const libraryPs1CardImg3 = document.getElementById('libraryPs1CardImg3');
const libraryPs1CardImg4 = document.getElementById('libraryPs1CardImg4');
const libraryPs1CardImg5 = document.getElementById('libraryPs1CardImg5');
const libraryPs1CardImg6 = document.getElementById('libraryPs1CardImg6');
const libraryPs1CardImg7 = document.getElementById('libraryPs1CardImg7');
const libraryPs1CardImg8 = document.getElementById('libraryPs1CardImg8');
const libraryPs1CardImg9 = document.getElementById('libraryPs1CardImg9');
const libraryPs1CardImg10 = document.getElementById('libraryPs1CardImg10');
const libraryPs1CardImg11 = document.getElementById('libraryPs1CardImg11');
const libraryPs1CardImg12 = document.getElementById('libraryPs1CardImg12');
const libraryPs1CardImg13 = document.getElementById('libraryPs1CardImg13');
const libraryPs1CardImg14 = document.getElementById('libraryPs1CardImg14');
const libraryPs1CardImg15 = document.getElementById('libraryPs1CardImg15');
const libraryPs1CardImg16 = document.getElementById('libraryPs1CardImg16');
const libraryPs1CardImg17 = document.getElementById('libraryPs1CardImg17');
const libraryPs1CardImg18 = document.getElementById('libraryPs1CardImg18');
const libraryPs1CardImg19 = document.getElementById('libraryPs1CardImg19');
const libraryPs1CardImg20 = document.getElementById('libraryPs1CardImg20');
const libraryPs1CardImg21 = document.getElementById('libraryPs1CardImg21');
const libraryPs1CardImg22 = document.getElementById('libraryPs1CardImg22');
const libraryPs1CardImg23 = document.getElementById('libraryPs1CardImg23');
const libraryPs1CardImg24 = document.getElementById('libraryPs1CardImg24');
const libraryPs1CardImg25 = document.getElementById('libraryPs1CardImg25');
const libraryPs1CardImg26 = document.getElementById('libraryPs1CardImg26');
const libraryPs1CardImg27 = document.getElementById('libraryPs1CardImg27');
const libraryPs1CardImg28 = document.getElementById('libraryPs1CardImg28');
const libraryPs1CardImg29 = document.getElementById('libraryPs1CardImg29');
const libraryPs1CardImg30 = document.getElementById('libraryPs1CardImg30');
const libraryPs1CardImg31 = document.getElementById('libraryPs1CardImg31');
const libraryPs1CardImg32 = document.getElementById('libraryPs1CardImg32');
const libraryPs1CardImg33 = document.getElementById('libraryPs1CardImg33');
const libraryPs1CardImg34 = document.getElementById('libraryPs1CardImg34');
const libraryPs1CardImg35 = document.getElementById('libraryPs1CardImg35');
const libraryPs1CardImg36 = document.getElementById('libraryPs1CardImg36');
const libraryPs1CardImg37 = document.getElementById('libraryPs1CardImg37');
const libraryPs1CardImg38 = document.getElementById('libraryPs1CardImg38');
const libraryPs1CardImg39 = document.getElementById('libraryPs1CardImg39');
const libraryPs1CardImg40 = document.getElementById('libraryPs1CardImg40');
const libraryPs1CardImg41 = document.getElementById('libraryPs1CardImg41');
const libraryPs1CardImg42 = document.getElementById('libraryPs1CardImg42');
const libraryPs1CardImg43 = document.getElementById('libraryPs1CardImg43');
const libraryPs1CardImg44 = document.getElementById('libraryPs1CardImg44');
const libraryPs1CardImg45 = document.getElementById('libraryPs1CardImg45');
const libraryPs1CardImg46 = document.getElementById('libraryPs1CardImg46');
const libraryPs1CardImg47 = document.getElementById('libraryPs1CardImg47');
const libraryPs1CardImg48 = document.getElementById('libraryPs1CardImg48');
const libraryPs1CardImg49 = document.getElementById('libraryPs1CardImg49');
const libraryPs1CardImg50 = document.getElementById('libraryPs1CardImg50');
const searchPs1Card1Img = document.getElementById('searchPs1Card1Img');
const searchPs1Card2Img = document.getElementById('searchPs1Card2Img');
const searchPs1Card3Img = document.getElementById('searchPs1Card3Img');
const searchPs1Card4Img = document.getElementById('searchPs1Card4Img');
const searchPs1Card5Img = document.getElementById('searchPs1Card5Img');
const searchPs1Card6Img = document.getElementById('searchPs1Card6Img');
const searchPs1Card7Img = document.getElementById('searchPs1Card7Img');
const searchPs1Card8Img = document.getElementById('searchPs1Card8Img');
const searchPs1Card9Img = document.getElementById('searchPs1Card9Img');
const searchPs1Card10Img = document.getElementById('searchPs1Card10Img');
const searchPs1Card11Img = document.getElementById('searchPs1Card11Img');
const searchPs1Card12Img = document.getElementById('searchPs1Card12Img');
const searchPs1Card13Img = document.getElementById('searchPs1Card13Img');
const searchPs1Card14Img = document.getElementById('searchPs1Card14Img');
const searchPs1Card15Img = document.getElementById('searchPs1Card15Img');
const searchPs1Card16Img = document.getElementById('searchPs1Card16Img');
const searchPs1Card17Img = document.getElementById('searchPs1Card17Img');
const searchPs1Card18Img = document.getElementById('searchPs1Card18Img');
const searchPs1Card19Img = document.getElementById('searchPs1Card19Img');
const searchPs1Card20Img = document.getElementById('searchPs1Card20Img');
const searchPs1Card21Img = document.getElementById('searchPs1Card21Img');
const searchPs1Card22Img = document.getElementById('searchPs1Card22Img');
const searchPs1Card23Img = document.getElementById('searchPs1Card23Img');
const searchPs1Card24Img = document.getElementById('searchPs1Card24Img');
const searchPs1Card25Img = document.getElementById('searchPs1Card25Img');
const searchPs1Card26Img = document.getElementById('searchPs1Card26Img');
const searchPs1Card27Img = document.getElementById('searchPs1Card27Img');
const searchPs1Card28Img = document.getElementById('searchPs1Card28Img');
const searchPs1Card29Img = document.getElementById('searchPs1Card29Img');
const searchPs1Card30Img = document.getElementById('searchPs1Card30Img');
const searchPs1Card31Img = document.getElementById('searchPs1Card31Img');
const searchPs1Card32Img = document.getElementById('searchPs1Card32Img');
const searchPs1Card33Img = document.getElementById('searchPs1Card33Img');
const searchPs1Card34Img = document.getElementById('searchPs1Card34Img');
const searchPs1Card35Img = document.getElementById('searchPs1Card35Img');
const searchPs1Card36Img = document.getElementById('searchPs1Card36Img');
const searchPs1Card37Img = document.getElementById('searchPs1Card37Img');
const searchPs1Card38Img = document.getElementById('searchPs1Card38Img');
const searchPs1Card39Img = document.getElementById('searchPs1Card39Img');
const searchPs1Card40Img = document.getElementById('searchPs1Card40Img');
const searchPs1Card41Img = document.getElementById('searchPs1Card41Img');
const searchPs1Card42Img = document.getElementById('searchPs1Card42Img');
const searchPs1Card43Img = document.getElementById('searchPs1Card43Img');
const searchPs1Card44Img = document.getElementById('searchPs1Card44Img');
const searchPs1Card45Img = document.getElementById('searchPs1Card45Img');
const searchPs1Card46Img = document.getElementById('searchPs1Card46Img');
const searchPs1Card47Img = document.getElementById('searchPs1Card47Img');
const searchPs1Card48Img = document.getElementById('searchPs1Card48Img');
const searchPs1Card49Img = document.getElementById('searchPs1Card49Img');
const searchPs1Card50Img = document.getElementById('searchPs1Card50Img');
searchPs1Card1Img.src = catalogo_ps1[0].capa;
searchPs1Card2Img.src = catalogo_ps1[1].capa;
searchPs1Card3Img.src = catalogo_ps1[2].capa;
searchPs1Card4Img.src = catalogo_ps1[3].capa;
searchPs1Card5Img.src = catalogo_ps1[4].capa;
searchPs1Card6Img.src = catalogo_ps1[5].capa;
searchPs1Card7Img.src = catalogo_ps1[6].capa;
searchPs1Card8Img.src = catalogo_ps1[7].capa;
searchPs1Card9Img.src = catalogo_ps1[8].capa;
searchPs1Card10Img.src = catalogo_ps1[9].capa;
searchPs1Card11Img.src = catalogo_ps1[10].capa;
searchPs1Card12Img.src = catalogo_ps1[11].capa;
searchPs1Card13Img.src = catalogo_ps1[12].capa;
searchPs1Card14Img.src = catalogo_ps1[13].capa;
searchPs1Card15Img.src = catalogo_ps1[14].capa;
searchPs1Card16Img.src = catalogo_ps1[15].capa;
searchPs1Card17Img.src = catalogo_ps1[16].capa;
searchPs1Card18Img.src = catalogo_ps1[17].capa;
searchPs1Card19Img.src = catalogo_ps1[18].capa;
searchPs1Card20Img.src = catalogo_ps1[19].capa;
searchPs1Card21Img.src = catalogo_ps1[20].capa;
searchPs1Card22Img.src = catalogo_ps1[21].capa;
searchPs1Card23Img.src = catalogo_ps1[22].capa;
searchPs1Card24Img.src = catalogo_ps1[23].capa;
searchPs1Card25Img.src = catalogo_ps1[24].capa;
searchPs1Card26Img.src = catalogo_ps1[25].capa;
searchPs1Card27Img.src = catalogo_ps1[26].capa;
searchPs1Card28Img.src = catalogo_ps1[27].capa;
searchPs1Card29Img.src = catalogo_ps1[28].capa;
searchPs1Card30Img.src = catalogo_ps1[29].capa;
searchPs1Card31Img.src = catalogo_ps1[30].capa;
searchPs1Card32Img.src = catalogo_ps1[31].capa;
searchPs1Card33Img.src = catalogo_ps1[32].capa;
searchPs1Card34Img.src = catalogo_ps1[33].capa;
searchPs1Card35Img.src = catalogo_ps1[34].capa;
searchPs1Card36Img.src = catalogo_ps1[35].capa;
searchPs1Card37Img.src = catalogo_ps1[36].capa;
searchPs1Card38Img.src = catalogo_ps1[37].capa;
searchPs1Card39Img.src = catalogo_ps1[38].capa;
searchPs1Card40Img.src = catalogo_ps1[39].capa;
searchPs1Card41Img.src = catalogo_ps1[40].capa;
searchPs1Card42Img.src = catalogo_ps1[41].capa;
searchPs1Card43Img.src = catalogo_ps1[42].capa;
searchPs1Card44Img.src = catalogo_ps1[43].capa;
searchPs1Card45Img.src = catalogo_ps1[44].capa;
searchPs1Card46Img.src = catalogo_ps1[45].capa;
searchPs1Card47Img.src = catalogo_ps1[46].capa;
searchPs1Card48Img.src = catalogo_ps1[47].capa;
searchPs1Card49Img.src = catalogo_ps1[48].capa;
searchPs1Card50Img.src = catalogo_ps1[49].capa;


libraryPs1CardImg1.src = catalogo_ps1[0]['capa'];
libraryPs1CardImg2.src = catalogo_ps1[1]['capa'];
libraryPs1CardImg3.src = catalogo_ps1[2]['capa'];
libraryPs1CardImg4.src = catalogo_ps1[3]['capa'];
libraryPs1CardImg5.src = catalogo_ps1[4]['capa'];
libraryPs1CardImg6.src = catalogo_ps1[5]['capa'];
libraryPs1CardImg7.src = catalogo_ps1[6]['capa'];
libraryPs1CardImg8.src = catalogo_ps1[7]['capa'];
libraryPs1CardImg9.src = catalogo_ps1[8]['capa'];
libraryPs1CardImg10.src = catalogo_ps1[9]['capa'];
libraryPs1CardImg11.src = catalogo_ps1[10]['capa'];
libraryPs1CardImg12.src = catalogo_ps1[11]['capa'];
libraryPs1CardImg13.src = catalogo_ps1[12]['capa'];
libraryPs1CardImg14.src = catalogo_ps1[13]['capa'];
libraryPs1CardImg15.src = catalogo_ps1[14]['capa'];
libraryPs1CardImg16.src = catalogo_ps1[15]['capa'];
libraryPs1CardImg17.src = catalogo_ps1[16]['capa'];
libraryPs1CardImg18.src = catalogo_ps1[17]['capa'];
libraryPs1CardImg19.src = catalogo_ps1[18]['capa'];
libraryPs1CardImg20.src = catalogo_ps1[19]['capa'];
libraryPs1CardImg21.src = catalogo_ps1[20]['capa'];
libraryPs1CardImg22.src = catalogo_ps1[21]['capa'];
libraryPs1CardImg23.src = catalogo_ps1[22]['capa'];
libraryPs1CardImg24.src = catalogo_ps1[23]['capa'];
libraryPs1CardImg25.src = catalogo_ps1[24]['capa'];
libraryPs1CardImg26.src = catalogo_ps1[25]['capa'];
libraryPs1CardImg27.src = catalogo_ps1[26]['capa'];
libraryPs1CardImg28.src = catalogo_ps1[27]['capa'];
libraryPs1CardImg29.src = catalogo_ps1[28]['capa'];
libraryPs1CardImg30.src = catalogo_ps1[29]['capa'];
libraryPs1CardImg31.src = catalogo_ps1[30]['capa'];
libraryPs1CardImg32.src = catalogo_ps1[31]['capa'];
libraryPs1CardImg33.src = catalogo_ps1[32]['capa'];
libraryPs1CardImg34.src = catalogo_ps1[33]['capa'];
libraryPs1CardImg35.src = catalogo_ps1[34]['capa'];
libraryPs1CardImg36.src = catalogo_ps1[35]['capa'];
libraryPs1CardImg37.src = catalogo_ps1[36]['capa'];
libraryPs1CardImg38.src = catalogo_ps1[37]['capa'];
libraryPs1CardImg39.src = catalogo_ps1[38]['capa'];
libraryPs1CardImg40.src = catalogo_ps1[39]['capa'];
libraryPs1CardImg41.src = catalogo_ps1[40]['capa'];
libraryPs1CardImg42.src = catalogo_ps1[41]['capa'];
libraryPs1CardImg43.src = catalogo_ps1[42]['capa'];
libraryPs1CardImg44.src = catalogo_ps1[43]['capa'];
libraryPs1CardImg45.src = catalogo_ps1[44]['capa'];
libraryPs1CardImg46.src = catalogo_ps1[45]['capa'];
libraryPs1CardImg47.src = catalogo_ps1[46]['capa'];
libraryPs1CardImg48.src = catalogo_ps1[47]['capa'];
libraryPs1CardImg49.src = catalogo_ps1[48]['capa'];
libraryPs1CardImg50.src = catalogo_ps1[49]['capa'];



//MODIFICAÇÃO DAS CAPAS PRINCIPAIS
//MODIFICAÇÃO DAS CAPAS PRINCIPAIS
//MODIFICAÇÃO DAS CAPAS PRINCIPAIS
//MODIFICAÇÃO DAS CAPAS PRINCIPAIS
//MODIFICAÇÃO DAS CAPAS PRINCIPAIS
//MODIFICAÇÃO DAS CAPAS PRINCIPAIS
//MODIFICAÇÃO DAS CAPAS PRINCIPAIS
//MODIFICAÇÃO DAS CAPAS PRINCIPAIS
//MODIFICAÇÃO DAS CAPAS PRINCIPAIS
//MODIFICAÇÃO DAS CAPAS PRINCIPAIS
card1capa.src = catalogo_ps1[0]['capa']
card2capa.src = catalogo_ps1[1]['capa']
card3capa.src = catalogo_ps1[2]['capa']
card4capa.src = catalogo_ps1[3]['capa']
card5capa.src = catalogo_ps1[4]['capa']
card6capa.src = catalogo_ps1[5]['capa']
card7capa.src = catalogo_ps1[6]['capa']
card8capa.src = catalogo_ps1[7]['capa']
card9capa.src = catalogo_ps1[8]['capa']
card10capa.src = catalogo_ps1[9]['capa']
card11capa.src = catalogo_ps2[0]['capa']
card12capa.src = catalogo_ps2[1]['capa']
card13capa.src = catalogo_ps2[2]['capa']
card14capa.src = catalogo_ps2[3]['capa']
card15capa.src = catalogo_ps2[4]['capa']
card16capa.src = catalogo_ps2[5]['capa']
card17capa.src = catalogo_ps2[6]['capa']
card18capa.src = catalogo_ps2[7]['capa']
card19capa.src = catalogo_ps2[8]['capa']
card20capa.src = catalogo_ps2[9]['capa']



//O QUE ACONTECE PARA CADA CLICK EM CADA CARD
//O QUE ACONTECE PARA CADA CLICK EM CADA CARD
//O QUE ACONTECE PARA CADA CLICK EM CADA CARD
//O QUE ACONTECE PARA CADA CLICK EM CADA CARD
//O QUE ACONTECE PARA CADA CLICK EM CADA CARD
//O QUE ACONTECE PARA CADA CLICK EM CADA CARD
//O QUE ACONTECE PARA CADA CLICK EM CADA CARD
//O QUE ACONTECE PARA CADA CLICK EM CADA CARD
//O QUE ACONTECE PARA CADA CLICK EM CADA CARD
//O QUE ACONTECE PARA CADA CLICK EM CADA CARD

// Loop de 11 até 20

desinstalar11.style.display = 'none'
desinstalar12.style.display = 'none'
desinstalar13.style.display = 'none'
desinstalar14.style.display = 'none'
desinstalar15.style.display = 'none'
desinstalar16.style.display = 'none'
desinstalar17.style.display = 'none'
desinstalar18.style.display = 'none'
desinstalar19.style.display = 'none'
desinstalar20.style.display = 'none'
const ps1Testezada2 = document.getElementById('ps1Testezada2');
const ps1Testezada3 = document.getElementById('ps1Testezada3');
const ps1Testezada4 = document.getElementById('ps1Testezada4');
const ps1Testezada5 = document.getElementById('ps1Testezada5');
const ps1Testezada6 = document.getElementById('ps1Testezada6');
const ps1Testezada7 = document.getElementById('ps1Testezada7');
const ps1Testezada8 = document.getElementById('ps1Testezada8');
const ps1Testezada9 = document.getElementById('ps1Testezada9');
const ps1Testezada10 = document.getElementById('ps1Testezada10');
const ps1Testezada11 = document.getElementById('ps1Testezada11');
const ps1Testezada12 = document.getElementById('ps1Testezada12');
const ps1Testezada13 = document.getElementById('ps1Testezada13');
const ps1Testezada14 = document.getElementById('ps1Testezada14');
const ps1Testezada15 = document.getElementById('ps1Testezada15');
const ps1Testezada16 = document.getElementById('ps1Testezada16');
const ps1Testezada17 = document.getElementById('ps1Testezada17');
const ps1Testezada18 = document.getElementById('ps1Testezada18');
const ps1Testezada19 = document.getElementById('ps1Testezada19');
const ps1Testezada20 = document.getElementById('ps1Testezada20');
const ps1Testezada21 = document.getElementById('ps1Testezada21');
const ps1Testezada22 = document.getElementById('ps1Testezada22');
const ps1Testezada23 = document.getElementById('ps1Testezada23');
const ps1Testezada24 = document.getElementById('ps1Testezada24');
const ps1Testezada25 = document.getElementById('ps1Testezada25');
const ps1Testezada26 = document.getElementById('ps1Testezada26');
const ps1Testezada27 = document.getElementById('ps1Testezada27');
const ps1Testezada28 = document.getElementById('ps1Testezada28');
const ps1Testezada29 = document.getElementById('ps1Testezada29');
const ps1Testezada30 = document.getElementById('ps1Testezada30');
const ps1Testezada31 = document.getElementById('ps1Testezada31');
const ps1Testezada32 = document.getElementById('ps1Testezada32');
const ps1Testezada33 = document.getElementById('ps1Testezada33');
const ps1Testezada34 = document.getElementById('ps1Testezada34');
const ps1Testezada35 = document.getElementById('ps1Testezada35');
const ps1Testezada36 = document.getElementById('ps1Testezada36');
const ps1Testezada37 = document.getElementById('ps1Testezada37');
const ps1Testezada38 = document.getElementById('ps1Testezada38');
const ps1Testezada39 = document.getElementById('ps1Testezada39');
const ps1Testezada40 = document.getElementById('ps1Testezada40');
const ps1Testezada41 = document.getElementById('ps1Testezada41');
const ps1Testezada42 = document.getElementById('ps1Testezada42');
const ps1Testezada43 = document.getElementById('ps1Testezada43');
const ps1Testezada44 = document.getElementById('ps1Testezada44');
const ps1Testezada45 = document.getElementById('ps1Testezada45');
const ps1Testezada46 = document.getElementById('ps1Testezada46');
const ps1Testezada47 = document.getElementById('ps1Testezada47');
const ps1Testezada48 = document.getElementById('ps1Testezada48');
const ps1Testezada49 = document.getElementById('ps1Testezada49');
const ps1Testezada50 = document.getElementById('ps1Testezada50');


const roms = [
  "https://romsfun.com/download/resident-evil-4-12946/5", "https://romsfun.com/download/metal-gear-solid-3-subsistence-14711/4", "https://romsfun.com/download/god-of-war-ii-12928/5", "https://romsfun.com/download/grand-theft-auto-san-andreas-id-1-12950/10", "https://romsfun.com/download/metal-gear-solid-2-sons-of-liberty-88355/10", "https://romsfun.com/download/god-of-war-169969-70788/5", "https://romsfun.com/download/grand-theft-auto-vice-city-15552/14", "https://romsfun.com/download/shadow-of-the-colossus-64993-14607/5", "https://romsfun.com/download/wwe-smackdown-here-comes-the-pain-12960/3", "https://romsfun.com/download/final-fantasy-x-12931/8",
  "https://romsfun.com/download/dragonball-z-budokai-tenkaichi-3-1-12934/2", "https://romsfun.com/download/tekken-5-12925/7", "https://romsfun.com/download/gran-turismo-4-68036-12973/13", "https://romsfun.com/download/burnout-3-demo-disc-140407/3", "https://romsfun.com/download/devil-may-cry-3-dantes-awakening-special-edition-3-86968/1", "https://romsfun.com/download/kingdom-hearts-12957/11", "https://romsfun.com/download/need-for-speed-most-wanted-and-black-edition-15062/9", "https://romsfun.com/download/dragonball-z-budokai-3-14592/6", "https://romsfun.com/download/hitman-blood-money-15291/7", "https://romsfun.com/download/def-jam-fight-for-ny-3-70729/5",
  "https://romsfun.com/download/need-for-speed-most-wanted-and-black-edition-15062/9", "https://romsfun.com/download/ratchet-clank-id2-14885/8", "https://romsfun.com/download/wwe-smackdown-vs-raw-14610/7", "https://romsfun.com/download/devil-may-cry-1-14589/6", "https://romsfun.com/download/downhill-domination-12988/4", "https://romsfun.com/download/prince-of-persia-the-sands-of-time-15177/6", "https://romsfun.com/download/guitar-hero-87661/4", "https://romsfun.com/download/prince-of-persia-warrior-within-3-70946", "https://romsfun.com/download/tekken-tag-tournament-1-15040/8", "https://romsfun.com/download/black-14576/8",
  "https://romsfun.com/download/god-hand-13011/6", "https://romsfun.com/download/midnight-club-3-dub-edition-2-16069/3", "https://romsfun.com/download/naruto-shippuden-ultimate-ninja-5-latino-218519/1", "https://romsfun.com/download/wwe-smackdown-vs-raw-2011-12943/2", "https://romsfun.com/download/spider-man-5-16807/11", "https://romsfun.com/download/sengoku-basara-2-heroes-89367/1", "https://romsfun.com/download/onimusha-dawn-of-dreams-14633/4", "https://romsfun.com/download/mortal-kombat-armageddon-id2-14636/2", "https://romsfun.com/download/need-for-speed-carbon-15154/9", "https://romsfun.com/download/tekken-4-14678/10",
  "https://romsfun.com/download/jet-li-rise-to-honor-87945/2", "https://romsfun.com/download/pro-evolution-soccer-2011-15090/4", "https://romsfun.com/download/driver-parallel-lines-2-16717/8", "https://romsfun.com/download/battlefield-2-modern-combat-14750/10", "https://romsfun.com/download/disney-pixar-cars-18361/11", "https://romsfun.com/download/crash-nitro-kart-2-15141/4", "https://romsfun.com/download/crash-bandicoot-the-wrath-of-cortex-53877-15347/6", "https://romsfun.com/download/sega-superstars-tennis-4-107153/2", "https://romsfun.com/download/call-of-duty-world-at-war-final-fronts-15833/3", "https://romsfun.com/download/devil-may-cry-2-15536/12"
];

const ps1roms = ['https://romsfun.com/download/final-fantasy-ix-28249/60','https://romsfun.com/download/tomb-raider-5-25613/58','https://romsfun.com/download/metal-gear-solid-21802/50','https://romsfun.com/download/final-fantasy-viii-21732/64','https://romsfun.com/download/final-fantasy-vii-21726/42','https://romsfun.com/download/the-legend-of-dragoon-21838/63','https://romsfun.com/download/__trashed-75-9330/25','https://romsfun.com/download/gran-turismo-2-2-24117/29','https://romsfun.com/download/driver-2-back-on-the-streets-26002/23','https://romsfun.com/download/koudelka-24470/59','https://romsfun.com/download/crash-bandicoot-21729/14','https://romsfun.com/download/parasite-eve-2-21754/24','https://romsfun.com/download/tekken-3-21735/14','https://romsfun.com/download/medievil-25601/55','https://romsfun.com/download/syphon-filter-2-25658/44','https://romsfun.com/download/fear-effect-26157/33','https://romsfun.com/download/resident-evil-3-nemesis-9414/16','https://romsfun.com/download/dino-crisis-21850/20','https://romsfun.com/download/racing-133470/2','https://romsfun.com/download/the-x-files-24476/45','https://romsfun.com/download/heart-of-darkness-25956/31','https://romsfun.com/download/__trashed-4-9395/12','https://romsfun.com/download/alone-in-the-dark-the-new-nightmare-3-21929/25','https://romsfun.com/download/silent-hill-21820/22','https://romsfun.com/download/legend-2-131737/94','https://romsfun.com/download/tomb-raider-3-adventures-of-lara-croft-25625/33','https://romsfun.com/download/fear-effect-2-retro-helix-25269/18','https://romsfun.com/download/galerians-22362/36','https://romsfun.com/download/d-3-129880/60','https://romsfun.com/download/dino-crisis-2-21805/18','https://romsfun.com/download/vigilante-8-21793/24','https://romsfun.com/download/spyro-the-dragon-21841/31','https://romsfun.com/download/gran-turismo-6657-25646/19','https://romsfun.com/download/riven-the-sequel-to-myst-24922/50','https://romsfun.com/download/jackie-chan-stuntmaster-21856/6','https://romsfun.com/download/street-fighter-collection-25384/10', 'https://romsfun.com/download/medal-of-honor-21877/12','https://romsfun.com/download/spider-man-2-enter-electro-23701/12','https://romsfun.com/download/tomb-raider-2-22338/13','https://romsfun.com/download/blade-2-26024/31','https://romsfun.com/download/crash-bandicoot-2-cortex-strikes-back-21826/10','https://romsfun.com/download/doom-2-26100/16','https://romsfun.com/download/pac-man-world-4-21784/15','https://romsfun.com/download/yu-gi-oh-forbidden-memories-21747/7','https://romsfun.com/download/legacy-of-kain-soul-reaver-22749/16','https://romsfun.com/download/tekken-2-25676/16','https://romsfun.com/download/one-132860/117','https://romsfun.com/download/star-ocean-the-second-story-23348/26','https://romsfun.com/download/parasite-eve-25560/4','https://romsfun.com/download/command-conquer-28593/24']

for (let i = 11; i <= 60; i++) {
    const button = document.getElementById(`playGameHolderButton${i}`);

    if (button) {
        button.addEventListener('click', async () => {
            const data = catalogo_ps2[i - 11];
            const index = i - 11;
            
            if (!data) return;

            const caminhoRelativoJogo = data.caminho;
            const caminhoAbsolutoJogo = await window.electronAPI.resolvePath(caminhoRelativoJogo);
            const existe = await window.electronAPI.verifyPath(caminhoAbsolutoJogo);

            if (existe) {
                const relPcsx2Path = 'ps2_emulator/PS2/Play2/pcsx2-qt.exe'; 
                const absPcsx2Path = await window.electronAPI.resolvePath(relPcsx2Path);

                try {
                    await window.electronAPI.launchGame(absPcsx2Path, caminhoAbsolutoJogo);
                } catch (error) {
                    console.error("Erro ao abrir o jogo de PS2:", error);
                }
            } else {
                frameHolder.style.display = 'flex';
                frame.style.display = 'flex';
                frame2.style.display = 'none';
                iframe.src = roms[index];
                frameHolder.inert = false;
                
                const elementsToInert = [
                    menuHolder, searchPs1Holder, searchPs2Holder, 
                    search, background, header, library, playGame
                ];
                
                elementsToInert.forEach(el => {
                    if (el) el.inert = true;
                });

                frameHolderBack.focus();
            }
        });
    }
}

for (let i = 11; i <= 60; i++) {
    const card = document.getElementById(`card${i}`);
    const currentTestezada = document.getElementById(`testezada${i}`);
    const currentPlayBtn = document.getElementById(`playGameHolderButton${i}`);

    if (card) {
        card.addEventListener('click', async () => {
            
            playGameHolderButton.style.display = 'none';
            
            for (let j = 11; j <= 60; j++) {
                const tz = document.getElementById(`testezada${j}`);
                if (tz) tz.style.display = 'none';
            }
            
            if (currentTestezada) currentTestezada.style.display = 'flex';
            if (currentPlayBtn) currentPlayBtn.style.display = 'block';

            const data = catalogo_ps2[i - 11];
            if (!data) return;

            const caminhoRelativo = data.caminho; 
            const caminhoAbsoluto = await window.electronAPI.resolvePath(caminhoRelativo);
            const existe = await window.electronAPI.verifyPath(caminhoAbsoluto);
            
            if (existe && currentPlayBtn) {
                currentPlayBtn.textContent = 'JOGAR';
            } else if (currentPlayBtn) {
                currentPlayBtn.textContent = 'INSTALAR'; 
            }

            playGameHolderDesc.textContent = data.desc || "Descrição não disponível.";
            rateGray2.textContent = data.hours || "--";
            playGameHolderTitleImg.src = data.logo || "";
            playGameBackground.src = data.background || "";
            rate.innerHTML = `<p id='rate'>${data.rate || "0"}${data.rateGray || ""}${data.year || ""}</span></p>`;

            playGame.style.display = 'flex';
            playGameBack.focus();
            playGame.scrollTop = 0;
            if (currentPlayBtn) currentPlayBtn.focus();
            sJoinGame.play();

            const elementsToInactivate = [
                menuHolder, searchPs1Holder, searchPs2Holder, 
                search, background, header, library
            ];
            elementsToInactivate.forEach(el => { if(el) el.inert = true; });
            playGame.inert = false;
        });
    }
}

for (let i = 11; i <= 20; i++) {
    const card = document.getElementById(`card${i}Header`);
    const currentTestezada = document.getElementById(`testezada${i}`);
    const currentPlayBtn = document.getElementById(`playGameHolderButton${i}`);
    
    if (card) {
        card.addEventListener('click', async () => {
            playGameHolderButton.style.display = 'none';
            
            for (let k = 21; k <= 60; k++) {
                const target = document.getElementById(`testezada${k}`);
                if (target) target.style.display = 'none';
            }
            
            for (let j = 11; j <= 20; j++) {
                const tz = document.getElementById(`testezada${j}`);
                if (tz) tz.style.display = 'none';
            }
            
            if (currentTestezada) currentTestezada.style.display = 'flex';
            if (currentPlayBtn) currentPlayBtn.style.display = 'block';

            const data = catalogo_ps2[i - 11];
            if (!data) return;

            const caminhoRelativo = data.caminho;
            const caminhoAbsoluto = await window.electronAPI.resolvePath(caminhoRelativo);
            const existe = await window.electronAPI.verifyPath(caminhoAbsoluto);
            
            if (existe && currentPlayBtn) {
                currentPlayBtn.textContent = 'JOGAR';
            } else if (currentPlayBtn) {
                currentPlayBtn.textContent = 'INSTALAR';
            }

            playGameHolderDesc.textContent = data.desc || "Descrição não disponível.";
            rateGray2.textContent = data.hours || "--";
            playGameHolderTitleImg.src = data.logo || "";
            playGameBackground.src = data.background || "";
            rate.innerHTML = `<p id='rate'>${data.rate || "0"}${data.rateGray || ""}${data.year || ""}</span></p>`;

            playGame.style.display = 'flex';
            playGameBack.focus();
            playGame.scrollTop = 0;
            if (currentPlayBtn) currentPlayBtn.focus();
            sJoinGame.play();

            const elementsToInactivate = [
                menuHolder, searchPs1Holder, searchPs2Holder, 
                search, background, header, library
            ];
            elementsToInactivate.forEach(el => { if(el) el.inert = true; });
            playGame.inert = false;
        });
    }
}

for (let i = 11; i <= 60; i++) {
    const card = document.getElementById(`cardd${i}`);
    const currentTestezada = document.getElementById(`testezada${i}`);
    const currentPlayBtn = document.getElementById(`playGameHolderButton${i}`);

    if (card) {
        card.addEventListener('click', async () => {
            for (let k = 1; k <= 50; k++) {
                const ps1Tz = document.getElementById(`ps1Testezada${k}`);
                if (ps1Tz) ps1Tz.style.display = 'none';
            }

            playGameBack.focus();
            playGameHolderButton.style.display = 'none';
            
            for (let j = 11; j <= 60; j++) {
                const tz = document.getElementById(`testezada${j}`);
                if (tz) tz.style.display = 'none';
            }
            
            if (currentTestezada) currentTestezada.style.display = 'flex';
            if (currentPlayBtn) currentPlayBtn.style.display = 'block';

            const data = catalogo_ps2[i - 11];
            if (!data) return;

            const caminhoRelativo = data.caminho;
            const caminhoAbsoluto = await window.electronAPI.resolvePath(caminhoRelativo);
            const existe = await window.electronAPI.verifyPath(caminhoAbsoluto);

            if (existe && currentPlayBtn) {
                currentPlayBtn.textContent = 'JOGAR';
            } else if (currentPlayBtn) {
                currentPlayBtn.textContent = 'INSTALAR';
            }

            playGameHolderDesc.textContent = data.desc || "Descrição não disponível.";
            rateGray2.textContent = data.hours || "--";
            playGameHolderTitleImg.src = data.logo || "";
            playGameBackground.src = data.background || "";
            rate.innerHTML = `<p id='rate'>${data.rate || "0"}${data.rateGray || ""}${data.year || ""}</span></p>`;

            playGame.style.display = 'flex';
            playGame.scrollTop = 0;
            if (currentPlayBtn) currentPlayBtn.focus();
            sJoinGame.play();

            const elementsToInactivate = [
                menuHolder, searchPs1Holder, searchPs2Holder, 
                search, background, header, library
            ];
            elementsToInactivate.forEach(el => { if(el) el.inert = true; });
            playGame.inert = false;
        });
    }
}

const ps1Testezada1 = document.getElementById('ps1Testezada1')

for (let i = 1; i <= 10; i++) {
    const card = document.getElementById(`card${i}`);

    if (card) {
        card.addEventListener('click', () => {
            testezada11.style.display = 'none';
            testezada12.style.display = 'none';
            testezada13.style.display = 'none';
            testezada14.style.display = 'none';
            testezada15.style.display = 'none';
            testezada16.style.display = 'none';
            testezada17.style.display = 'none';
            testezada18.style.display = 'none';
            testezada19.style.display = 'none';
            testezada20.style.display = 'none';
            testezada21.style.display = 'none';
            testezada22.style.display = 'none';
            testezada23.style.display = 'none';
            testezada24.style.display = 'none';
            testezada25.style.display = 'none';
            testezada26.style.display = 'none';
            testezada27.style.display = 'none';
            testezada28.style.display = 'none';
            testezada29.style.display = 'none';
            testezada30.style.display = 'none';
            testezada31.style.display = 'none';
            testezada32.style.display = 'none';
            testezada33.style.display = 'none';
            testezada34.style.display = 'none';
            testezada35.style.display = 'none';
            testezada36.style.display = 'none';
            testezada37.style.display = 'none';
            testezada38.style.display = 'none';
            testezada39.style.display = 'none';
            testezada40.style.display = 'none';
            testezada41.style.display = 'none';
            testezada42.style.display = 'none';
            testezada43.style.display = 'none';
            testezada44.style.display = 'none';
            testezada45.style.display = 'none';
            testezada46.style.display = 'none';
            testezada47.style.display = 'none';
            testezada48.style.display = 'none';
            testezada49.style.display = 'none';
            testezada50.style.display = 'none';
            
            sJoinGame.play();
            const data = catalogo_ps1[i - 1];

            if (!data) return;

            playGame.style.display = 'flex';
            playGameHolderDesc.textContent = data.desc || "Descrição não disponível.";
            rateGray2.textContent = data.hours || "--";
            playGameHolderTitleImg.src = data.logo || "";
            playGameBackground.src = data.background || "";
            rate.innerHTML = `<p id='rate'>${data.rate || "0"}${data.rateGray || ""}${data.year || ""}</span></p>`;

            playGame.style.display = 'flex';
            playGame.scrollTop = 0;
            playGameHolderButton.style.display = 'none';
            
            for (let j = 1; j <= 50; j++) {
                const testezada = document.getElementById(`ps1Testezada${j}`);
                if (testezada) testezada.style.display = 'none';
            }

            const currentTestezada = document.getElementById(`ps1Testezada${i}`);
            if (currentTestezada) currentTestezada.style.display = 'flex';

            const elementsToInactivate = [
                menuHolder, searchPs1Holder, searchPs2Holder, 
                search, background, header, library
            ];
            
            elementsToInactivate.forEach(el => { 
                if(el) el.inert = true; 
            });
            playGame.inert = false;
        });
    }
}

for (let i = 1; i <= 50; i++) {
    const card = document.getElementById(`libraryPs1Card${i}`);

    if (card) {
        card.addEventListener('click', () => {
            testezada11.style.display = 'none';
            testezada12.style.display = 'none';
            testezada13.style.display = 'none';
            testezada14.style.display = 'none';
            testezada15.style.display = 'none';
            testezada16.style.display = 'none';
            testezada17.style.display = 'none';
            testezada18.style.display = 'none';
            testezada19.style.display = 'none';
            testezada20.style.display = 'none';
            testezada21.style.display = 'none';
            testezada22.style.display = 'none';
            testezada23.style.display = 'none';
            testezada24.style.display = 'none';
            testezada25.style.display = 'none';
            testezada26.style.display = 'none';
            testezada27.style.display = 'none';
            testezada28.style.display = 'none';
            testezada29.style.display = 'none';
            testezada30.style.display = 'none';
            testezada31.style.display = 'none';
            testezada32.style.display = 'none';
            testezada33.style.display = 'none';
            testezada34.style.display = 'none';
            testezada35.style.display = 'none';
            testezada36.style.display = 'none';
            testezada37.style.display = 'none';
            testezada38.style.display = 'none';
            testezada39.style.display = 'none';
            testezada40.style.display = 'none';
            testezada41.style.display = 'none';
            testezada42.style.display = 'none';
            testezada43.style.display = 'none';
            testezada44.style.display = 'none';
            testezada45.style.display = 'none';
            testezada46.style.display = 'none';
            testezada47.style.display = 'none';
            testezada48.style.display = 'none';
            testezada49.style.display = 'none';
            testezada50.style.display = 'none';
            
            sJoinGame.play();
            const data = catalogo_ps1[i - 1];

            if (!data) return;

            playGame.style.display = 'flex';
            playGameHolderDesc.textContent = data.desc || "Descrição não disponível.";
            rateGray2.textContent = data.hours || "--";
            playGameHolderTitleImg.src = data.logo || "";
            playGameBackground.src = data.background || "";
            rate.innerHTML = `<p id='rate'>${data.rate || "0"}${data.rateGray || ""}${data.year || ""}</span></p>`;

            playGame.style.display = 'flex';
            playGameBack.focus()
            playGame.scrollTop = 0;
            playGameHolderButton.style.display = 'none';
            
            for (let j = 1; j <= 50; j++) {
                const testezada = document.getElementById(`ps1Testezada${j}`);
                if (testezada) testezada.style.display = 'none';
            }

            const currentTestezada = document.getElementById(`ps1Testezada${i}`);
            if (currentTestezada) currentTestezada.style.display = 'flex';

            const elementsToInactivate = [
                menuHolder, searchPs1Holder, searchPs2Holder, 
                search, background, header, library
            ];
            
            elementsToInactivate.forEach(el => { 
                if(el) el.inert = true; 
            });
            playGame.inert = false;
        });
    }
}

for (let i = 1; i <= 50; i++) {
    const card = document.getElementById(`searchPs1Card${i}`);

    if (card) {
        card.addEventListener('click', () => {
            testezada11.style.display = 'none';
            testezada12.style.display = 'none';
            testezada13.style.display = 'none';
            testezada14.style.display = 'none';
            testezada15.style.display = 'none';
            testezada16.style.display = 'none';
            testezada17.style.display = 'none';
            testezada18.style.display = 'none';
            testezada19.style.display = 'none';
            testezada20.style.display = 'none';
            testezada21.style.display = 'none';
            testezada22.style.display = 'none';
            testezada23.style.display = 'none';
            testezada24.style.display = 'none';
            testezada25.style.display = 'none';
            testezada26.style.display = 'none';
            testezada27.style.display = 'none';
            testezada28.style.display = 'none';
            testezada29.style.display = 'none';
            testezada30.style.display = 'none';
            testezada31.style.display = 'none';
            testezada32.style.display = 'none';
            testezada33.style.display = 'none';
            testezada34.style.display = 'none';
            testezada35.style.display = 'none';
            testezada36.style.display = 'none';
            testezada37.style.display = 'none';
            testezada38.style.display = 'none';
            testezada39.style.display = 'none';
            testezada40.style.display = 'none';
            testezada41.style.display = 'none';
            testezada42.style.display = 'none';
            testezada43.style.display = 'none';
            testezada44.style.display = 'none';
            testezada45.style.display = 'none';
            testezada46.style.display = 'none';
            testezada47.style.display = 'none';
            testezada48.style.display = 'none';
            testezada49.style.display = 'none';
            testezada50.style.display = 'none';
            
            sJoinGame.play();
            const data = catalogo_ps1[i - 1];

            if (!data) return;

            playGame.style.display = 'flex';
            playGameHolderDesc.textContent = data.desc || "Descrição não disponível.";
            rateGray2.textContent = data.hours || "--";
            playGameHolderTitleImg.src = data.logo || "";
            playGameBackground.src = data.background || "";
            rate.innerHTML = `<p id='rate'>${data.rate || "0"}${data.rateGray || ""}${data.year || ""}</span></p>`;

            playGame.style.display = 'flex';
            playGameBack.focus()
            playGame.scrollTop = 0;
            playGameHolderButton.style.display = 'none';
            
            for (let j = 1; j <= 50; j++) {
                const testezada = document.getElementById(`ps1Testezada${j}`);
                if (testezada) testezada.style.display = 'none';
            }

            const currentTestezada = document.getElementById(`ps1Testezada${i}`);
            if (currentTestezada) currentTestezada.style.display = 'flex';

            const elementsToInactivate = [
                menuHolder, searchPs1Holder, searchPs2Holder, 
                search, background, header, library
            ];
            
            elementsToInactivate.forEach(el => { 
                if(el) el.inert = true; 
            });
            playGame.inert = false;
        });
    }
}


for (let i = 1; i <= 50; i++) {
    const button = document.getElementById(`playGameHolderPs1Button${i}`);
    
    if (button) {
        button.addEventListener('click', async () => {
            const data = catalogo_ps1[i - 1];
            const index = i - 1;
            
            if (!data) return;

            const caminhoRelativo = data.caminho;

            const caminhoAbsoluto = await window.electronAPI.resolvePath(caminhoRelativo);

            const existe = await window.electronAPI.verifyPath(caminhoAbsoluto);

            if (existe) {
                const relPcsx1Path = 'duckstation/duckstation-qt-x64-ReleaseLTCG.exe'; 
                const absPcsx1Path = await window.electronAPI.resolvePath(relPcsx1Path);

                try {
                    await window.electronAPI.launchGame(absPcsx1Path, caminhoAbsoluto);
                } catch (error) {
                    console.error("Erro ao abrir o jogo:", error);
                }
            } else {
                frameHolder.style.display = 'flex';
                frame.style.display = 'none';
                frame2.style.display = 'flex';
                iframe2.src = ps1roms[index];
                frameHolder.inert = false;
                
                const elementsToInert = [
                    menuHolder, searchPs1Holder, searchPs2Holder, 
                    search, background, header, library, playGame
                ];
                
                elementsToInert.forEach(el => { if (el) el.inert = true; });
                frameHolderBack.focus();
            }
        });
    }
}



playGameBack.addEventListener('click', () => {
    if(downloadBox.style.display == 'flex'){
        cancelarDownloadWarning2.classList.remove('opacidadeWarningReverse')
        cancelarDownloadWarning2.classList.add('opacidadeWarning')
        cancelarDownloadWarning2.style.display = 'flex'
        frameHolder.inert = true
        searchPs1Holder.inert = true
        searchPs2Holder.inert = true
        playGame.inert = true
        search.inert = true
        background.inert = true
        header.inert = true
        info.inert = true
        config.inert = true
        library.inert = true
        menu.inert = true
        sim2.focus()
        
    } else{
        cancelarDownloadWarning2.style.display = 'none'
        sLeavingGame.play()
        playGame.style.display = "none";
        body.style.overflowY = 'visible'
        frameHolder.inert = false
        searchPs1Holder.inert = false
        searchPs2Holder.inert = false
        playGame.inert = true
        search.inert = false
        background.inert = false
        header.inert = false
        info.inert = false
        config.inert = false
        library.inert = false
        menu.inert = false
        certo.focus()
        testezada11.style.display = 'none';
            testezada12.style.display = 'none';
            testezada13.style.display = 'none';
            testezada14.style.display = 'none';
            testezada15.style.display = 'none';
            testezada16.style.display = 'none';
            testezada17.style.display = 'none';
            testezada18.style.display = 'none';
            testezada19.style.display = 'none';
            testezada20.style.display = 'none';
            testezada21.style.display = 'none';
            testezada22.style.display = 'none';
            testezada23.style.display = 'none';
            testezada24.style.display = 'none';
            testezada25.style.display = 'none';
            testezada26.style.display = 'none';
            testezada27.style.display = 'none';
            testezada28.style.display = 'none';
            testezada29.style.display = 'none';
            testezada30.style.display = 'none';
            testezada31.style.display = 'none';
            testezada32.style.display = 'none';
            testezada33.style.display = 'none';
            testezada34.style.display = 'none';
            testezada35.style.display = 'none';
            testezada36.style.display = 'none';
            testezada37.style.display = 'none';
            testezada38.style.display = 'none';
            testezada39.style.display = 'none';
            testezada40.style.display = 'none';
            testezada41.style.display = 'none';
            testezada42.style.display = 'none';
            testezada43.style.display = 'none';
            testezada44.style.display = 'none';
            testezada45.style.display = 'none';
            testezada46.style.display = 'none';
            testezada47.style.display = 'none';
            testezada48.style.display = 'none';
            testezada49.style.display = 'none';
            testezada50.style.display = 'none';
            testezada51.style.display = 'none';
            testezada52.style.display = 'none';
            testezada53.style.display = 'none';
            testezada54.style.display = 'none';
            testezada55.style.display = 'none';
            testezada56.style.display = 'none';
            testezada57.style.display = 'none';
            testezada58.style.display = 'none';
            testezada59.style.display = 'none';
            testezada60.style.display = 'none';
             ps1Testezada1.style.display = 'none';
            ps1Testezada2.style.display = 'none';
            ps1Testezada3.style.display = 'none';
            ps1Testezada4.style.display = 'none';
            ps1Testezada5.style.display = 'none';
            ps1Testezada6.style.display = 'none';
            ps1Testezada7.style.display = 'none';
            ps1Testezada8.style.display = 'none';
            ps1Testezada9.style.display = 'none';
            ps1Testezada10.style.display = 'none';
            ps1Testezada11.style.display = 'none';
            ps1Testezada12.style.display = 'none';
            ps1Testezada13.style.display = 'none';
            ps1Testezada14.style.display = 'none';
            ps1Testezada15.style.display = 'none';
            ps1Testezada16.style.display = 'none';
            ps1Testezada17.style.display = 'none';
            ps1Testezada18.style.display = 'none';
            ps1Testezada19.style.display = 'none';
            ps1Testezada20.style.display = 'none';
            ps1Testezada21.style.display = 'none';
            ps1Testezada22.style.display = 'none';
            ps1Testezada23.style.display = 'none';
            ps1Testezada24.style.display = 'none';
            ps1Testezada25.style.display = 'none';
            ps1Testezada26.style.display = 'none';
            ps1Testezada27.style.display = 'none';
            ps1Testezada28.style.display = 'none';
            ps1Testezada29.style.display = 'none';
            ps1Testezada30.style.display = 'none';
            ps1Testezada31.style.display = 'none';
            ps1Testezada32.style.display = 'none';
            ps1Testezada33.style.display = 'none';
            ps1Testezada34.style.display = 'none';
            ps1Testezada35.style.display = 'none';
            ps1Testezada36.style.display = 'none';
            ps1Testezada37.style.display = 'none';
            ps1Testezada38.style.display = 'none';
            ps1Testezada39.style.display = 'none';
            ps1Testezada40.style.display = 'none';
            ps1Testezada41.style.display = 'none';
            ps1Testezada42.style.display = 'none';
            ps1Testezada43.style.display = 'none';
            ps1Testezada44.style.display = 'none';
            ps1Testezada45.style.display = 'none';
            ps1Testezada46.style.display = 'none';
            ps1Testezada47.style.display = 'none';
            ps1Testezada48.style.display = 'none';
            ps1Testezada49.style.display = 'none';
            ps1Testezada50.style.display = 'none';
    }
});




frameHolderBack.addEventListener('click', () => {
    sLeavingGame.play()
    frameHolder.style.display = 'none'
    frameHolder.inert = true
    playGame.inert = false
    header.inert = false
    btnCancelar.focus()
})


searchBar.addEventListener('input', (event) => {
    if (searchBar.value.trim() === ""){
        searchPlataforms.style.display = 'flex'
        searchPlataforms.classList.remove('opacidade');
        searchPlataforms.classList.add('opacidade');
        searchHolder.style.display = 'none'
        searchText.textContent = "Plataformas"
    } else {
        searchPlataforms.style.display = 'none'
        searchHolder.style.display = 'flex'
        searchHolder.classList.add('opacidade');
        searchText.textContent = "Jogos"
    }
});

searchBar.style.display = 'none'


library.inert = true
function libraryAnimation(){
    sJoinGame.play()
    library.style.display = 'flex'
    library.inert = false
        setTimeout(() => {
        header.style.display = 'none'
    }, 200);
}

function infoAnimation(){
    sJoinGame.play()
    info.style.transform = 'translateY(0)'
}

function searchAnimation(){
    setTimeout(() => {
        header.style.display = 'none'
    }, 400);
    frameHolder.inert = true
    searchPs1Holder.inert = true
    searchPs2Holder.inert = true
    playGame.inert = true
    search.inert = false
    background.inert = true
    header.inert = true
    info.inert = true
    config.inert = true
    library.inert = true
    menu.inert = true
    sJoinGame.play()
    searchPlataformsButtonPs1.focus()
    search.style.transform = 'translateY(0)'
}

function searchBackAnimation(){
    search.style.transform = 'translateY(-80rem)'
    header.style.display = 'block'
    frameHolder.inert = false
    searchPs1Holder.inert = false
    searchPs2Holder.inert = false
    playGame.inert = false
    search.inert = true
    background.inert = false
    header.inert = false
    info.inert = false
    config.inert = false
    library.inert = false
    menu.inert = false
    sLeavingGame.play()
    botaoSearch.focus()
}

botaoLibrary.addEventListener('click', libraryAnimation)
botaoInfo.addEventListener('click', infoAnimation)
botaoSearch.addEventListener('click', searchAnimation)
searchBack.addEventListener('click', searchBackAnimation)

document.addEventListener('focusin', (event) => {
    if (event.target.classList.contains('card')) {
        sMovingCard.currentTime = 0;
        sMovingCard.play()
    }
});


// SEARCHS PLATAFORMAS
const searchPs2HolderBack = document.querySelector('#searchPs2HolderBack');
const searchPs3HolderBack = document.querySelector('#searchPs3HolderBack');
const searchXbox360HolderBack = document.querySelector('#searchXbox360HolderBack');
const searchPs2Holder = document.querySelector('#searchPs2Holder');
const searchPs3Holder = document.querySelector('#searchPs3Holder');
const searchXbox360Holder = document.querySelector('#searchXbox360Holder');
const searchPlataformsButtonPs2 = document.querySelector('#searchPlataformsButtonPs2');
const searchPlataformsButtonPs3 = document.querySelector('#searchPlataformsButtonPs3');
const searchPlataformsButtonXbox360 = document.querySelector('#searchPlataformsButtonXbox360');
const searchPs1Card1 = document.getElementById('searchPs1Card1')
//PS1

searchPs3Holder.inert = true
searchXbox360Holder.inert = true


searchPlataformsButtonPs1.addEventListener('click', () =>{
    searchPs1Holder.style.display = "block";
    body.style.overflowT = 'hidden'
    frameHolder.inert = true
    searchPs1Holder.inert = false
    searchPs2Holder.inert = true
    searchPs3Holder.inert = true
    searchXbox360Holder.inert = true
    playGame.inert = true
    search.inert = true
    background.inert = true
    header.inert = true
    info.inert = true
    config.inert = true
    library.inert = true
    sJoinGame.play()
    searchPs1Card1.focus()
})


searchPs1HolderBack.addEventListener('click', () => {
    searchPs1Holder.style.display = "none";
    body.style.overflowY = 'visible'
    sLeavingGame.play()
    frameHolder.inert = true
    searchPs1Holder.inert = true
    searchPs2Holder.inert = true
    searchPs3Holder.inert = true
    searchXbox360Holder.inert = true
    playGame.inert = true
    search.inert = false
    background.inert = true
    header.inert = true
    info.inert = true
    config.inert = true
    library.inert = true
    searchPlataformsButtonPs1.focus()
});


searchPlataformsButtonPs2.addEventListener('click', () =>{
    searchPs2Holder.style.display = "block";
    body.style.overflowT = 'hidden'
    frameHolder.inert = true
    searchPs1Holder.inert = true
    searchPs2Holder.inert = false
    searchPs3Holder.inert = true
    searchXbox360Holder.inert = true
    playGame.inert = true
    search.inert = true
    background.inert = true
    header.inert = true
    info.inert = true
    config.inert = true
    library.inert = true
    sJoinGame.play()
    card11.focus()
})

searchPs2HolderBack.addEventListener('click', () => {
    searchPs2Holder.style.display = "none";
    body.style.overflowY = 'visible'
    sLeavingGame.play()
    frameHolder.inert = true
    searchPs1Holder.inert = true
    searchPs2Holder.inert = true
    searchPs3Holder.inert = true
    searchXbox360Holder.inert = true
    playGame.inert = true
    search.inert = false
    background.inert = true
    header.inert = true
    info.inert = true
    config.inert = true
    library.inert = true
    searchPlataformsButtonPs2.focus()
});

searchPlataformsButtonPs3.addEventListener('click', () =>{
    searchPs3Holder.style.display = "block";
    body.style.overflowT = 'hidden'
    frameHolder.inert = true
    searchPs1Holder.inert = true
    searchPs2Holder.inert = true
    searchPs3Holder.inert = false
    searchXbox360Holder.inert = true
    playGame.inert = true
    search.inert = true
    background.inert = true
    header.inert = true
    info.inert = true
    config.inert = true
    library.inert = true
    sJoinGame.play()
    searchPs3HolderOrderButtonSize.focus()
})

searchPs3HolderBack.addEventListener('click', () => {
    searchPs3Holder.style.display = "none";
    body.style.overflowY = 'visible'
    sLeavingGame.play()
    frameHolder.inert = true
    searchPs1Holder.inert = true
    searchPs2Holder.inert = true
    searchPs3Holder.inert = true
    searchXbox360Holder.inert = true
    playGame.inert = true
    search.inert = false
    background.inert = true
    header.inert = true
    info.inert = true
    config.inert = true
    library.inert = true
    searchPlataformsButtonPs3.focus()
});

searchPlataformsButtonXbox360.addEventListener('click', () =>{
    searchXbox360Holder.style.display = "block";
    body.style.overflowT = 'hidden'
    frameHolder.inert = true
    searchPs1Holder.inert = true
    searchPs2Holder.inert = true
    searchPs3Holder.inert = true
    searchXbox360Holder.inert = false
    playGame.inert = true
    search.inert = true
    background.inert = true
    header.inert = true
    info.inert = true
    config.inert = true
    library.inert = true
    sJoinGame.play()
    searchXbox360HolderOrderButtonSize.focus()
})

searchXbox360HolderBack.addEventListener('click', () => {
    searchXbox360Holder.style.display = "none";
    body.style.overflowY = 'visible'
    sLeavingGame.play()
    frameHolder.inert = true
    searchPs1Holder.inert = true
    searchPs2Holder.inert = true
    searchPs3Holder.inert = true
    searchXbox360Holder.inert = true
    playGame.inert = true
    search.inert = false
    background.inert = true
    header.inert = true
    info.inert = true
    config.inert = true
    library.inert = true
    searchPlataformsButtonXbox360.focus()
});


headerMenu.addEventListener('click', () => {
    frameHolder.inert = true
    searchPs1Holder.inert = true
    searchPs2Holder.inert = true
    search.inert = true
    background.inert = true
    header.inert = true
    info.inert = true
    config.inert = true
    library.inert = true
    menuHolder.inert = false
    menuHolder.style.display = 'flex'
    setTimeout(() => {
        menu.style.transform = 'translateX(3rem)'
    }, 100);
    menuHome.focus()
    sEnterMenu.play()
})

headerMenu.addEventListener('click', () => {
    menuHolder.inert = false;
    menuHolder.style.display = 'flex';

    setTimeout(() => {
        menuHolder.style.backgroundColor = 'rgba(0, 0, 0, 0.91)';
        menu.style.transform = 'translateX(3rem)';
    }, 50);

    menuHome.focus();
    sEnterMenu.play();
});

menuHome.addEventListener('click', () => {
    frameHolder.inert = false
    searchPs1Holder.inert = false
    searchPs2Holder.inert = false
    search.inert = false
    background.inert = false
    header.inert = false
    info.inert = false
    config.inert = false
    library.inert = false
    menuHolder.inert = true
    menu.style.transform = 'translateX(-10rem)';
    menuHolder.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    setTimeout(() => {
        menuHolder.style.display = 'none'
    }, 200);
    headerMenu.focus()
    sLeaveMenu.play()
})


playGameHolderButton.addEventListener('click', () => {
    window.api.lancarJogo(catalogo_ps2[0]['caminho']);
}) 





const progressBar = document.getElementById('progress-bar');
const downloadContainer = document.getElementById('download-container');
const statusText = document.getElementById('status-text');
const progressText = document.getElementById('progressText')
const downloadBox = document.getElementById('downloadBox')
const cancelarDownloadWarning = document.getElementById('cancelarDownloadWarning')
const cancelarDownloadWarning2 = document.getElementById('cancelarDownloadWarning2')
const nao1 = document.getElementById('cancelarDownloadWarningBoxHolderButton1')
const sim1 = document.getElementById('cancelarDownloadWarningBoxHolderButton2')
const nao2 = document.getElementById('cancelarDownloadWarning2BoxHolderButton1')
const sim2 = document.getElementById('cancelarDownloadWarning2BoxHolderButton2')


//FUNÇÃO QUE IDENTIFICA O COMEÇO DE ALGUM DOWNLOAD APARECENDO E SUMINDO A BARRA DE PROGRESSO...
//FUNÇÃO QUE IDENTIFICA O COMEÇO DE ALGUM DOWNLOAD APARECENDO E SUMINDO A BARRA DE PROGRESSO...
//FUNÇÃO QUE IDENTIFICA O COMEÇO DE ALGUM DOWNLOAD APARECENDO E SUMINDO A BARRA DE PROGRESSO...
//FUNÇÃO QUE IDENTIFICA O COMEÇO DE ALGUM DOWNLOAD APARECENDO E SUMINDO A BARRA DE PROGRESSO...
//FUNÇÃO QUE IDENTIFICA O COMEÇO DE ALGUM DOWNLOAD APARECENDO E SUMINDO A BARRA DE PROGRESSO...
async function acionarMovimento() {
  // Verifica se a API existe antes de chamar
  if (window.electronAPI && window.electronAPI.moverChd) {
    try {
      const resultado = await window.electronAPI.moverChd();
      console.log("Resultado do movimento:", resultado);
    } catch (err) {
      console.error("Erro ao chamar moverChd:", err);
    }
  } else {
    console.error("A API do Electron não foi carregada corretamente.");
  }
}

const ps1Mener = document.getElementById('ps1Mener')
const telaTeste = document.getElementById('telaTeste')

async function verificarChdzada(){
    const existe = await window.electronAPI.verificarChdzada()
    if(existe){
        telaTeste.style.display = 'flex'
        setTimeout(() => {
            telaTeste.style.display = 'none'
        }, 15000);
    }
}

window.electronAPI.onDownloadProgress((percentage) => {
  downloadBox.style.display = 'flex';
  if(downloadBox.classList.contains('opacidadeDownloadBox')){
    downloadBox.classList.remove('opacidadeDownloadBox')
  }
  downloadBox.classList.add('opacidade')
  progressBar.style.width = percentage + '%';
    if(percentage == 100){
        verificarChdzada()
        downloadBox.classList.add('opacidadeDownloadBox');
        setTimeout(() => {
            downloadBox.style.display = 'none';
        }, 1500);
        setTimeout(() => {
            acionarMovimento();
            ps1Mener.style.display = 'none'
        }, 8000);
  }
});




    function checkaInert (){
        if(downloadBox.style.display == 'flex'){
            playGameHolderButton11.inert = true
            playGameHolderButton12.inert = true
            playGameHolderButton13.inert = true
            playGameHolderButton14.inert = true
            playGameHolderButton15.inert = true
            playGameHolderButton16.inert = true
            playGameHolderButton17.inert = true
            playGameHolderButton18.inert = true
            playGameHolderButton19.inert = true
            playGameHolderButton20.inert = true
            playGameHolderButton21.inert = true;
            playGameHolderButton22.inert = true;
            playGameHolderButton23.inert = true;
            playGameHolderButton24.inert = true;
            playGameHolderButton25.inert = true;
            playGameHolderButton26.inert = true;
            playGameHolderButton27.inert = true;
            playGameHolderButton28.inert = true;
            playGameHolderButton29.inert = true;
            playGameHolderButton30.inert = true;
            playGameHolderButton31.inert = true;
            playGameHolderButton32.inert = true;
            playGameHolderButton33.inert = true;
            playGameHolderButton34.inert = true;
            playGameHolderButton35.inert = true;
            playGameHolderButton36.inert = true;
            playGameHolderButton37.inert = true;
            playGameHolderButton38.inert = true;
            playGameHolderButton39.inert = true;
            playGameHolderButton40.inert = true;
            playGameHolderButton41.inert = true;
            playGameHolderButton42.inert = true;
            playGameHolderButton43.inert = true;
            playGameHolderButton44.inert = true;
            playGameHolderButton45.inert = true;
            playGameHolderButton46.inert = true;
            playGameHolderButton47.inert = true;
            playGameHolderButton48.inert = true;
            playGameHolderButton49.inert = true;
            playGameHolderButton50.inert = true;
            playGameHolderButton51.inert = true;
            playGameHolderButton52.inert = true;
            playGameHolderButton53.inert = true;
            playGameHolderButton54.inert = true;
            playGameHolderButton55.inert = true;
            playGameHolderButton56.inert = true;
            playGameHolderButton57.inert = true;
            playGameHolderButton58.inert = true;
            playGameHolderButton59.inert = true;
            playGameHolderButton60.inert = true;
            
        } else if(downloadBox.style.display == 'none'){
            playGameHolderButton11.inert = false
            playGameHolderButton12.inert = false
            playGameHolderButton13.inert = false
            playGameHolderButton14.inert = false
            playGameHolderButton15.inert = false
            playGameHolderButton16.inert = false
            playGameHolderButton17.inert = false
            playGameHolderButton18.inert = false
            playGameHolderButton19.inert = false
            playGameHolderButton20.inert = false
            playGameHolderButton21.inert = false;
            playGameHolderButton22.inert = false;
            playGameHolderButton23.inert = false;
            playGameHolderButton24.inert = false;
            playGameHolderButton25.inert = false;
            playGameHolderButton26.inert = false;
            playGameHolderButton27.inert = false;
            playGameHolderButton28.inert = false;
            playGameHolderButton29.inert = false;
            playGameHolderButton30.inert = false;
            playGameHolderButton31.inert = false;
            playGameHolderButton32.inert = false;
            playGameHolderButton33.inert = false;
            playGameHolderButton34.inert = false;
            playGameHolderButton35.inert = false;
            playGameHolderButton36.inert = false;
            playGameHolderButton37.inert = false;
            playGameHolderButton38.inert = false;
            playGameHolderButton39.inert = false;
            playGameHolderButton40.inert = false;
            playGameHolderButton41.inert = false;
            playGameHolderButton42.inert = false;
            playGameHolderButton43.inert = false;
            playGameHolderButton44.inert = false;
            playGameHolderButton45.inert = false;
            playGameHolderButton46.inert = false;
            playGameHolderButton47.inert = false;
            playGameHolderButton48.inert = false;
            playGameHolderButton49.inert = false;
            playGameHolderButton50.inert = false;
            playGameHolderButton51.inert = false;
            playGameHolderButton52.inert = false;
            playGameHolderButton53.inert = false;
            playGameHolderButton54.inert = false;
            playGameHolderButton55.inert = false;
            playGameHolderButton56.inert = false;
            playGameHolderButton57.inert = false;
            playGameHolderButton58.inert = false;
            playGameHolderButton59.inert = false;
            playGameHolderButton60.inert = false;
        }
    }

setInterval(checkaInert, 1500);



//FUNÇÃO QUE MOVE O JOGO .ISO PARA A PASTA DE JOGOS PRONTOS DE PS2
//FUNÇÃO QUE MOVE O JOGO .ISO PARA A PASTA DE JOGOS PRONTOS DE PS2
//FUNÇÃO QUE MOVE O JOGO .ISO PARA A PASTA DE JOGOS PRONTOS DE PS2
//FUNÇÃO QUE MOVE O JOGO .ISO PARA A PASTA DE JOGOS PRONTOS DE PS2
async function finalizarInstalacao() {
    const resultado = await window.electronAPI.moverTodos();

    if (resultado.success) {
    console.log("O jogo foi movido para a pasta de JOGOS PRONTOS!");
    } else {
    console.log("Erro ao organizar arquivo: " + resultado.error);
    }
}



//FUNÇÃO QUE VERIFICA SE O ARQUIVO ZIP TA SENDO EXTRAIDO, BONTANDO O PROGRESSO NA TELA E DEPOIS DISSO LEVA O JOGO PARA A PASTA "PRONTA"
//FUNÇÃO QUE VERIFICA SE O ARQUIVO ZIP TA SENDO EXTRAIDO, BONTANDO O PROGRESSO NA TELA E DEPOIS DISSO LEVA O JOGO PARA A PASTA "PRONTA"
//FUNÇÃO QUE VERIFICA SE O ARQUIVO ZIP TA SENDO EXTRAIDO, BONTANDO O PROGRESSO NA TELA E DEPOIS DISSO LEVA O JOGO PARA A PASTA "PRONTA"
//FUNÇÃO QUE VERIFICA SE O ARQUIVO ZIP TA SENDO EXTRAIDO, BONTANDO O PROGRESSO NA TELA E DEPOIS DISSO LEVA O JOGO PARA A PASTA "PRONTA"
//FUNÇÃO QUE VERIFICA SE O ARQUIVO ZIP TA SENDO EXTRAIDO, BONTANDO O PROGRESSO NA TELA E DEPOIS DISSO LEVA O JOGO PARA A PASTA "PRONTA"

let jaAtivouTimer = false; 

async function monitorarArquivo() {
  const extrairTela = document.getElementById('extrairTela');
  
  // 1. Verifica se o arquivo existe
  const existe = await window.electronAPI.teste();

  if (!existe) {
    jaAtivouTimer = false;
  }

  if (existe && !jaAtivouTimer) {
    jaAtivouTimer = true; 
    extrairTela.style.display = 'flex';

    console.log("Arquivo detectado! Escondendo em 33 segundos...");

    setTimeout(() => {
      extrairTela.style.display = 'none';
      finalizarInstalacao()
    }, 35000);
  }
}

setInterval(monitorarArquivo, 3000);

const libraryPs1 = document.getElementById('libraryPs1')
const libraryPs2 = document.getElementById('libraryPs2')
const libraryPs3 = document.getElementById('libraryPs3')
const libraryXbox360 = document.getElementById('libraryXbox360')
const libraryPs1Card1 = document.getElementById('libraryPs1Card1')
const libraryPs2Card = document.querySelector('.libraryPs2Card')
const libraryPs2Card1 = document.querySelector('#libraryPs2Card1')
const libraryPs2Card1Img = document.querySelector('#libraryPs2Card1 img')
const libraryPs2Card2Img = document.querySelector('#libraryPs2Card2 img')
const libraryPs2Card2 = document.querySelector('#libraryPs2Card2')
const cardd11 = document.getElementById('cardd11')
const warningLibrary = document.getElementById('warningLibrary')
const libraryPs2Holder1 = document.getElementById('libraryPs2Holder1');
const libraryPs2Holder2 = document.getElementById('libraryPs2Holder2');
const libraryPs2Holder3 = document.getElementById('libraryPs2Holder3');
const libraryPs2Holder4 = document.getElementById('libraryPs2Holder4');
const libraryPs2Holder5 = document.getElementById('libraryPs2Holder5');
const libraryPs2Holder6 = document.getElementById('libraryPs2Holder6');
const libraryPs2Holder7 = document.getElementById('libraryPs2Holder7');
const libraryPs2Holder8 = document.getElementById('libraryPs2Holder8');
const libraryPs2Holder9 = document.getElementById('libraryPs2Holder9');
const libraryPs2Holder10 = document.getElementById('libraryPs2Holder10');

const holders = [
    libraryPs2Holder1, libraryPs2Holder2, libraryPs2Holder3, 
    libraryPs2Holder4, libraryPs2Holder5, libraryPs2Holder6, 
    libraryPs2Holder7, libraryPs2Holder8, libraryPs2Holder9, 
    libraryPs2Holder10
];

const monitorarArquivosInstaladosPs2 = async () => {
    const existe = await window.electronAPI.verificarInstaladosPs2();
    const existe2 = await window.electronAPI.verificarInstaladosPs1();
        if(existe.length == 0){
            libraryPs2.style.display = 'none'
            if(existe2.length == 0){
                warningLibrary.style.display = 'flex'
            }
        } else{
            libraryPs2.style.display = ' block'
            warningLibrary.style.display = 'none'
           
            catalogo_ps2.forEach(jogo => {
          
            if (existe.includes(jogo.nome)) {
                libraryPs2Holder1.style.display = 'flex'
                jogo.cardd.style.display = 'block'
} else {
    jogo.cardd.style.display = 'none';
}
            });
        }

};

setInterval(monitorarArquivosInstaladosPs2, 3000);





const monitorarArquivosInstaladosPs1 = async () => {
    const existe = await window.electronAPI.verificarInstaladosPs1();
    const existe2 = await window.electronAPI.verificarInstaladosPs2();
        if(existe.length == 0){
            libraryPs1.style.display = 'none'
            if(existe2.length == 0){
                warningLibrary.style.display = 'flex'
            }
        } else{
            libraryPs1.style.display = ' block'
            warningLibrary.style.display = 'none'
           
            catalogo_ps1.forEach(jogo => {
            
            if (existe.includes(jogo.nome)) {
                jogo.cardd.style.display = 'block';
            } else {
                jogo.cardd.style.display = 'none';
                }
            });
        }

};

setInterval(monitorarArquivosInstaladosPs1, 3000);







//FUNÇÃO QUE FAZ A ANIMAÇÃO DA BARRINHA VERMLHA DE DONWLOAD
//FUNÇÃO QUE FAZ A ANIMAÇÃO DA BARRINHA VERMLHA DE DONWLOAD
//FUNÇÃO QUE FAZ A ANIMAÇÃO DA BARRINHA VERMLHA DE DONWLOAD
//FUNÇÃO QUE FAZ A ANIMAÇÃO DA BARRINHA VERMLHA DE DONWLOAD
//FUNÇÃO QUE FAZ A ANIMAÇÃO DA BARRINHA VERMLHA DE DONWLOAD
//FUNÇÃO QUE FAZ A ANIMAÇÃO DA BARRINHA VERMLHA DE DONWLOAD

// Ouve o status final



//FUNÇÃO QUANDO O BOTAO TA ESCRITO INSTALAR...
//FUNÇÃO QUANDO O BOTAO TA ESCRITO INSTALAR...
//FUNÇÃO QUANDO O BOTAO TA ESCRITO INSTALAR...
//FUNÇÃO QUANDO O BOTAO TA ESCRITO INSTALAR...
//FUNÇÃO QUANDO O BOTAO TA ESCRITO INSTALAR...

window.electronAPI.onDownloadStarted(() => {
  const frame = document.getElementById('frameHolder');
  if (frame) {
    frame.style.display = 'none';
    btnCancelar.focus
            frameHolder.inert = true
            menuHolder.inert = true
            searchPs1Holder.inert = true
            searchPs2Holder.inert = true
            search.inert = true
            background.inert = true
            header.inert = true
            library.inert = true
            playGame.inert = false
  }
});


//FUNÇÃO QUE VERIFICA CONSTANTEMENTE SE TEM O ARQUIVO 100% PRONTO DO JOGO GTA PARA JOGAR, MODIFICANDO O BOTAO BRANCO...
//FUNÇÃO QUE VERIFICA CONSTANTEMENTE SE TEM O ARQUIVO 100% PRONTO DO JOGO GTA PARA JOGAR, MODIFICANDO O BOTAO BRANCO...
//FUNÇÃO QUE VERIFICA CONSTANTEMENTE SE TEM O ARQUIVO 100% PRONTO DO JOGO GTA PARA JOGAR, MODIFICANDO O BOTAO BRANCO...
//FUNÇÃO QUE VERIFICA CONSTANTEMENTE SE TEM O ARQUIVO 100% PRONTO DO JOGO GTA PARA JOGAR, MODIFICANDO O BOTAO BRANCO...
//FUNÇÃO QUE VERIFICA CONSTANTEMENTE SE TEM O ARQUIVO 100% PRONTO DO JOGO GTA PARA JOGAR, MODIFICANDO O BOTAO BRANCO...

async function verificarStatusJogo(index, button, desinstalarBtn) {
    const existe = await window.electronAPI.verifyPath(catalogo_ps2[index]['caminho']);
    
    if (existe) {
        desinstalarBtn.style.display = 'block';
        if (button.textContent !== 'JOGAR') {
            button.textContent = 'JOGAR';
        }
    } else {
        desinstalarBtn.style.display = 'none';
        if (button.textContent === 'JOGAR') {
            button.textContent = 'INSTALAR';
        }
    }
    setTimeout(() => verificarStatusJogo(index, button, desinstalarBtn), 2000);
}


// Itera do botão 11 ao 20
for (let i = 11; i <= 60; i++) {
    const btn = document.getElementById(`playGameHolderButton${i}`);
    const desinstalarBtn = document.getElementById(`desinstalar${i}`);
    if(btn) verificarStatusJogo(i - 11, btn, desinstalarBtn);
}

//ps1Desinstalar1

async function verificarStatusJogoPs1(index, button, desinstalarBtn) {
    const existe = await window.electronAPI.verifyPath(catalogo_ps1[index]['caminho']);
    
    if (existe) {
        desinstalarBtn.style.display = 'block';
        if (button.textContent !== 'JOGAR') {
            button.textContent = 'JOGAR';
        }
    } else {
        desinstalarBtn.style.display = 'none';
        if (button.textContent === 'JOGAR') {
            button.textContent = 'INSTALAR';
        }
    }
    setTimeout(() => verificarStatusJogoPs1(index, button, desinstalarBtn), 2000);
}


// Itera do botão 11 ao 20
for (let i = 1; i <= 50; i++) {
    const btn = document.getElementById(`playGameHolderPs1Button${i}`);
    const desinstalarBtn = document.getElementById(`ps1Desinstalar${i}`);
    if(btn) verificarStatusJogoPs1(i - 1, btn, desinstalarBtn);
}


//FUNÇÃO PARA GRAVAR O CARD EM QUAL PAROU QUANDO SAIR DO PLAYGAME
//FUNÇÃO PARA GRAVAR O CARD EM QUAL PAROU QUANDO SAIR DO PLAYGAME
//FUNÇÃO PARA GRAVAR O CARD EM QUAL PAROU QUANDO SAIR DO PLAYGAME
//FUNÇÃO PARA GRAVAR O CARD EM QUAL PAROU QUANDO SAIR DO PLAYGAME
//FUNÇÃO PARA GRAVAR O CARD EM QUAL PAROU QUANDO SAIR DO PLAYGAME
let ultimoCardFocado = "";
let certo = ''

document.addEventListener('focusin', (event) => {
    let ultimoCardFocado = event.target;
     if(ultimoCardFocado.classList.contains('card')){
        certo = ultimoCardFocado
     }
});

//FUNÇÕES PARA A TELA DE PERGUNTA DE CANCELAR O DOWNLOAD...
//FUNÇÕES PARA A TELA DE PERGUNTA DE CANCELAR O DOWNLOAD...
//FUNÇÕES PARA A TELA DE PERGUNTA DE CANCELAR O DOWNLOAD...
//FUNÇÕES PARA A TELA DE PERGUNTA DE CANCELAR O DOWNLOAD...
//FUNÇÕES PARA A TELA DE PERGUNTA DE CANCELAR O DOWNLOAD...
//FUNÇÕES PARA A TELA DE PERGUNTA DE CANCELAR O DOWNLOAD...

const btnCancelar = document.getElementById('btnCancelar');

  btnCancelar.addEventListener('click', () => {
    cancelarDownloadWarning.classList.remove('opacidadeWarningReverse')
    cancelarDownloadWarning.classList.add('opacidadeWarning')
    cancelarDownloadWarning.style.display = 'flex'
        frameHolder.inert = true
        searchPs1Holder.inert = true
        searchPs2Holder.inert = true
        playGame.inert = true
        search.inert = true
        background.inert = true
        header.inert = true
        info.inert = true
        config.inert = true
        library.inert = true
        menu.inert = true
        sim1.focus()
  })



libraryBack.addEventListener('click', () => {
    sLeavingGame.play()
    library.style.display = 'none'
    header.style.display = 'block'
    if(menuHolder.style.display == 'flex'){
    menuBooks.focus()
    } else{
        botaoLibrary.focus()
    }
})




  // Ação de cancelar
sim1.addEventListener('click', () => {
    window.electronAPI.cancelDownload();
    downloadBox.classList.remove('opacidade')
    downloadBox.classList.add('opacidadeDownloadBox')
    playGameHolderButton11.textContent = 'INSTALAR'
    playGameHolderButton12.textContent = 'INSTALAR'
    playGameHolderButton13.textContent = 'INSTALAR'
    playGameHolderButton14.textContent = 'INSTALAR'
    playGameHolderButton15.textContent = 'INSTALAR'
    playGameHolderButton16.textContent = 'INSTALAR'
    playGameHolderButton17.textContent = 'INSTALAR'
    playGameHolderButton18.textContent = 'INSTALAR'
    playGameHolderButton19.textContent = 'INSTALAR'
    playGameHolderButton20.textContent = 'INSTALAR'
    setTimeout(() => {
    downloadBox.style.display = 'none';
}, 1000);
        cancelarDownloadWarning.classList.remove('opacidadeWarning')
        cancelarDownloadWarning.classList.add('opacidadeWarningReverse')
        cancelarDownloadWarning.style.display = 'none'
        frameHolder.inert = true
        searchPs1Holder.inert = true
        searchPs2Holder.inert = true
        playGame.inert = false
        search.inert = true
        background.inert = true
        header.inert = true
        info.inert = true
        config.inert = true
        library.inert = true
        menu.inert = true

        playGameHolderButton11.inert = false
        playGameHolderButton12.inert = false
        playGameHolderButton13.inert = false
        playGameHolderButton14.inert = false
        playGameHolderButton15.inert = false
        playGameHolderButton16.inert = false
        playGameHolderButton17.inert = false
        playGameHolderButton18.inert = false
        playGameHolderButton19.inert = false
        playGameHolderButton20.inert = false
        playGameBack.focus()
});


  // Ação de cancelar
nao1.addEventListener('click', () => {
        cancelarDownloadWarning.classList.remove('opacidadeWarning')
        cancelarDownloadWarning.classList.add('opacidadeWarningReverse')
        cancelarDownloadWarning.style.display = 'none'
        frameHolder.inert = true
        searchPs1Holder.inert = true
        searchPs2Holder.inert = true
        playGame.inert = false
        search.inert = true
        background.inert = true
        header.inert = true
        info.inert = true
        config.inert = true
        library.inert = true
        menu.inert = true
        playGameBack.focus()
});



  // Ação de cancelar
sim2.addEventListener('click', () => {
    window.electronAPI.cancelDownload();
    downloadBox.classList.remove('opacidade')
    downloadBox.classList.add('opacidadeDownloadBox')
    playGameHolderButton11.textContent = 'INSTALAR'
    playGameHolderButton12.textContent = 'INSTALAR'
    playGameHolderButton13.textContent = 'INSTALAR'
    playGameHolderButton14.textContent = 'INSTALAR'
    playGameHolderButton15.textContent = 'INSTALAR'
    playGameHolderButton16.textContent = 'INSTALAR'
    playGameHolderButton17.textContent = 'INSTALAR'
    playGameHolderButton18.textContent = 'INSTALAR'
    playGameHolderButton19.textContent = 'INSTALAR'
    playGameHolderButton20.textContent = 'INSTALAR'
    setTimeout(() => {
    downloadBox.style.display = 'none';
}, 1000);
        cancelarDownloadWarning2.classList.remove('opacidadeWarning')
        cancelarDownloadWarning2.classList.add('opacidadeWarningReverse')
        cancelarDownloadWarning2.style.display = 'none'
        frameHolder.inert = true
        searchPs1Holder.inert = true
        searchPs2Holder.inert = true
        playGame.inert = false
        search.inert = true
        background.inert = true
        header.inert = true
        info.inert = true
        config.inert = true
        library.inert = true
        menu.inert = true

        playGameHolderButton11.inert = false
        playGameHolderButton12.inert = false
        playGameHolderButton13.inert = false
        playGameHolderButton14.inert = false
        playGameHolderButton15.inert = false
        playGameHolderButton16.inert = false
        playGameHolderButton17.inert = false
        playGameHolderButton18.inert = false
        playGameHolderButton19.inert = false
        playGameHolderButton20.inert = false
        playGameBack.focus()
});

nao2.addEventListener('click', () => {
    cancelarDownloadWarning2.classList.remove('opacidadeWarning')
    cancelarDownloadWarning2.classList.add('opacidadeWarningReverse')
    cancelarDownloadWarning2.style.display = 'none'
    frameHolder.inert = true
    searchPs1Holder.inert = true
    searchPs2Holder.inert = true
    playGame.inert = false
    search.inert = true
    background.inert = true
    header.inert = true
    info.inert = true
    config.inert = true
    library.inert = true
    menu.inert = true
    playGameBack.focus()
});


//BACKGROUND SONGS
//BACKGROUND SONGS
//BACKGROUND SONGS
//BACKGROUND SONGS
//BACKGROUND SONGS
//BACKGROUND SONGS
//BACKGROUND SONGS
//BACKGROUND SONGS
//BACKGROUND SONGS
//BACKGROUND SONGS
const backgroundSongId = document.getElementById('backgroundSong')
const backgroundSong = document.querySelector('.backgroundSong')
backgroundSong.volume = 0.1

const desinstalarTela = document.getElementById('desinstalarTela')
const desinstalarTelaP = document.querySelector('#desinstalarTela p')
const desinstalarTelaBox = document.getElementById('desinstalarTelaBox')
const desisntalarTelaBoxHolder = document.getElementById('desisntalarTelaBoxHolder')
const desinstalarTelaBoxHolderButtonNao = document.getElementById('desinstalarTelaBoxHolderButtonNao')
const desinstalarTelaBoxHolderButtonSim = document.getElementById('desinstalarTelaBoxHolderButtonSim')



for (let i = 11; i <= 60; i++) {
    const btn = document.getElementById(`desinstalar${i}`);
    
    if (btn) {
        btn.addEventListener('click', async () => {
            sEnterMenu.play();
            playGame.inert = true;
            
            const indexCatalogo = i - 11;
            const jogo = catalogo_ps2[indexCatalogo];
            const currentPlayBtn = document.getElementById(`playGameHolderButton${i}`);

            desinstalarTela.style.display = 'flex';
            desinstalarTelaBox.style.display = 'flex';
            desinstalarTelaP.textContent = `Você quer desinstalar ${jogo['titulo']}?`;
            desinstalarTelaBoxHolderButtonNao.focus();

            desinstalarTelaBoxHolderButtonNao.onclick = () => {
                desinstalarTela.style.display = 'none';
                playGame.inert = false;
                sLeaveMenu.currentTime = 0;
                sLeaveMenu.play();
            };

            desinstalarTelaBoxHolderButtonSim.onclick = async () => {
                desinstalarTela.style.display = 'none';
                playGame.inert = false;
                sLeaveMenu.currentTime = 0;
                sLeaveMenu.play();

                // Chamamos a API passando o caminho relativo do jogo
                // Note: No seu preload ela chama 'deletargta', mas vamos garantir que o main entenda
                const resultado = await window.electronAPI.deletargta(jogo['caminho']);
                
                if (resultado.success) {
                    // Atualiza o botão para "INSTALAR" na hora
                    if (currentPlayBtn) {
                        currentPlayBtn.textContent = 'INSTALAR';
                    }
                    
                    // Mostra o aviso de sucesso (ps1Mener)
                    ps1Mener.style.display = 'flex';
                    setTimeout(() => {
                        ps1Mener.style.display = 'none';
                    }, 4000);
                } else {
                    console.error("Erro ao deletar:", resultado.message);
                    alert("Não foi possível deletar o arquivo.");
                }
            };
        });
    }
}


for (let i = 1; i <= 50; i++) {
    const btn = document.getElementById(`ps1Desinstalar${i}`);
    
    if (btn) {
        btn.addEventListener('click', async () => {
            sEnterMenu.play();
            playGame.inert = true;
            
            // O catálogo de PS1 começa no índice 0, e seu loop começa em 1
            const indexCatalogo = i - 1; 
            const jogo = catalogo_ps1[indexCatalogo];
            
            // Precisamos pegar o botão de jogar correto do PS1 para atualizar o texto
            const currentPlayBtn = document.getElementById(`playGameHolderPs1Button${i}`);

            desinstalarTela.style.display = 'flex';
            desinstalarTelaBox.style.display = 'flex'; 
            desinstalarTelaP.textContent = `Você quer desinstalar ${jogo['titulo']}?`;
            desinstalarTelaBoxHolderButtonNao.focus();

            desinstalarTelaBoxHolderButtonNao.onclick = () => {
                desinstalarTela.style.display = 'none';
                playGame.inert = false;
                sLeaveMenu.currentTime = 0;
                sLeaveMenu.play();
            };

            desinstalarTelaBoxHolderButtonSim.onclick = async () => {
                desinstalarTela.style.display = 'none';
                playGame.inert = false;
                sLeaveMenu.currentTime = 0;
                sLeaveMenu.play();
                

                const resultado = await window.electronAPI.deletargta(jogo['caminho']);
                
                if (resultado.success) {
                    if (currentPlayBtn) {
                        currentPlayBtn.textContent = 'INSTALAR';
                    }

                    ps1Mener.style.display = 'flex';
                    setTimeout(() => {
                        ps1Mener.style.display = 'none';
                    }, 4000);
                } else {
                    console.error("Erro ao deletar arquivo de PS1:", resultado.message);
                }
            };
        });
    }
}

const configCard1 = document.getElementById('configCard1')
const configCard2 = document.getElementById('configCard2')
const configCard3 = document.getElementById('configCard3')
const configCard4 = document.getElementById('configCard4')
const configCard5 = document.getElementById('configCard5')
const configCard6 = document.getElementById('configCard6')
const configCard7 = document.getElementById('configCard7')
const configCard8 = document.getElementById('configCard8')
const configCard9 = document.getElementById('configCard9')
const configCard10 = document.getElementById('configCard10')
const configCard11 = document.getElementById('configCard11')
const configCard1Img = document.getElementById('configCard1Img');
const configCard2Img = document.getElementById('configCard2Img');
const configCard3Img = document.getElementById('configCard3Img');
const configCard4Img = document.getElementById('configCard4Img');
const configCard5Img = document.getElementById('configCard5Img');
const configCard6Img = document.getElementById('configCard6Img');
const configCard7Img = document.getElementById('configCard7Img');
const configCard8Img = document.getElementById('configCard8Img');
const configCard9Img = document.getElementById('configCard9Img');
const configCard10Img = document.getElementById('configCard10Img');
const configSoundBoxCard = document.querySelector('.configSoundBoxCard')
const configSoundBox = document.getElementById('configSoundBox')
const configSound = document.getElementById('configSound')
const barSoundImg = document.getElementById('barSoundImg')
const configLeftBar = document.getElementById('configLeftBar')



function tocarESalvarMusica(caminho, relative) {
    backgroundSongId.src = caminho;
    backgroundSongId.currentTime = 0;
    backgroundSong.play();
    
    // Salva o caminho no armazenamento local do app
    localStorage.setItem('backgroundSong', caminho);
    localStorage.setItem('cardSalvo', relative)
}





configCard1.addEventListener('click', async () => {
    tocarESalvarMusica('background_songs/GTA_ San Andreas - Main Theme _ Michael Hunter - _Theme from San Andreas_.mp3', "card1");
    barSoundImg.src = 'background_songs_covers/gta-san-andreas.png'
    configCard1Img.classList.add('rodarCard')
    configCard2Img.classList.remove('rodarCard')
    configCard3Img.classList.remove('rodarCard')
    configCard4Img.classList.remove('rodarCard')
    configCard5Img.classList.remove('rodarCard')
    configCard6Img.classList.remove('rodarCard')
    configCard7Img.classList.remove('rodarCard')
    configCard8Img.classList.remove('rodarCard')
    configCard9Img.classList.remove('rodarCard')
    configCard10Img.classList.remove('rodarCard')
    configCard1.style.border = '4.5px solid red'
    configCard2.style.border = 'none'
    configCard3.style.border = 'none'
    configCard4.style.border = 'none'
    configCard5.style.border = 'none'
    configCard6.style.border = 'none'
    configCard7.style.border = 'none'
    configCard8.style.border = 'none'
    configCard9.style.border = 'none'
    configCard10.style.border = 'none'
    configCard11.style.border = 'none'
    configCard1.style.borderRadius = '50%'
    configCard2.style.borderRadius = '0px'
    configCard3.style.borderRadius = '0px'
    configCard4.style.borderRadius = '0px'
    configCard5.style.borderRadius = '0px'
    configCard6.style.borderRadius = '0px'
    configCard7.style.borderRadius = '0px'
    configCard8.style.borderRadius = '0px'
    configCard9.style.borderRadius = '0px'
    configCard10.style.borderRadius = '0px'
})

configCard2.addEventListener('click', async () => {
    tocarESalvarMusica('background_songs/Billie Jean.mp3', "card2");
    barSoundImg.src = 'background_songs_covers//240305-mj-billiejean-single.jpg'
    configCard1Img.classList.remove('rodarCard')
    configCard2Img.classList.add('rodarCard')
    configCard3Img.classList.remove('rodarCard')
    configCard4Img.classList.remove('rodarCard')
    configCard5Img.classList.remove('rodarCard')
    configCard6Img.classList.remove('rodarCard')
    configCard7Img.classList.remove('rodarCard')
    configCard8Img.classList.remove('rodarCard')
    configCard9Img.classList.remove('rodarCard')
    configCard10Img.classList.remove('rodarCard')
    configCard1.style.border = 'none'
    configCard2.style.border = '4.5px solid red'
    configCard3.style.border = 'none'
    configCard4.style.border = 'none'
    configCard5.style.border = 'none'
    configCard6.style.border = 'none'
    configCard7.style.border = 'none'
    configCard8.style.border = 'none'
    configCard9.style.border = 'none'
    configCard10.style.border = 'none'
    configCard11.style.border = 'none'
    configCard1.style.borderRadius = '0px'
    configCard2.style.borderRadius = '50%'
    configCard3.style.borderRadius = '0px'
    configCard4.style.borderRadius = '0px'
    configCard5.style.borderRadius = '0px'
    configCard6.style.borderRadius = '0px'
    configCard7.style.borderRadius = '0px'
    configCard8.style.borderRadius = '0px'
    configCard9.style.borderRadius = '0px'
    configCard10.style.borderRadius = '0px'
})

configCard3.addEventListener('click', async () => {
    tocarESalvarMusica("background_songs/Bon Jovi - Livin' on a Prayer (Instrumental) - HQRockNRollMusic (youtube).mp3", "card3");
    barSoundImg.src = 'background_songs_covers//livin.jpg'
    configCard1Img.classList.remove('rodarCard')
    configCard2Img.classList.remove('rodarCard')
    configCard3Img.classList.add('rodarCard')
    configCard4Img.classList.remove('rodarCard')
    configCard5Img.classList.remove('rodarCard')
    configCard6Img.classList.remove('rodarCard')
    configCard7Img.classList.remove('rodarCard')
    configCard8Img.classList.remove('rodarCard')
    configCard9Img.classList.remove('rodarCard')
    configCard10Img.classList.remove('rodarCard')
    configCard1.style.borderRadius = '0px'
    configCard2.style.borderRadius = '0px'
    configCard3.style.borderRadius = '50%'
    configCard4.style.borderRadius = '0px'
    configCard5.style.borderRadius = '0px'
    configCard6.style.borderRadius = '0px'
    configCard7.style.borderRadius = '0px'
    configCard8.style.borderRadius = '0px'
    configCard9.style.borderRadius = '0px'
    configCard10.style.borderRadius = '0px'
    configCard1.style.borderRadius = '0px'
    configCard1.style.border = 'none'
configCard2.style.border = 'none'
configCard3.style.border = '4.5px solid red'
configCard4.style.border = 'none'
configCard5.style.border = 'none'
configCard6.style.border = 'none'
configCard7.style.border = 'none'
configCard8.style.border = 'none'
configCard9.style.border = 'none'
configCard10.style.border = 'none'
    configCard11.style.border = 'none'

})

configCard4.addEventListener('click', async () => {
    tocarESalvarMusica("background_songs/MC Hammer - U Can't Touch This (Instrumental) - Black Watch (youtube).mp3", "card4");
    barSoundImg.src = 'background_songs_covers/cant touch.jpg'
    configCard1Img.classList.remove('rodarCard')
    configCard2Img.classList.remove('rodarCard')
    configCard3Img.classList.remove('rodarCard')
    configCard4Img.classList.add('rodarCard')
    configCard5Img.classList.remove('rodarCard')
    configCard6Img.classList.remove('rodarCard')
    configCard7Img.classList.remove('rodarCard')
    configCard8Img.classList.remove('rodarCard')
    configCard9Img.classList.remove('rodarCard')
    configCard10Img.classList.remove('rodarCard')
    configCard1.style.borderRadius = '0px'
    configCard2.style.borderRadius = '0px'
    configCard3.style.borderRadius = '0px'
    configCard4.style.borderRadius = '50%'
    configCard5.style.borderRadius = '0px'
    configCard6.style.borderRadius = '0px'
    configCard7.style.borderRadius = '0px'
    configCard8.style.borderRadius = '0px'
    configCard9.style.borderRadius = '0px'
    configCard10.style.borderRadius = '0px'
    configCard1.style.border = 'none'
configCard2.style.border = 'none'
configCard3.style.border = 'none'
configCard4.style.border = '4.5px solid red'
configCard5.style.border = 'none'
configCard6.style.border = 'none'
configCard7.style.border = 'none'
configCard8.style.border = 'none'
configCard9.style.border = 'none'
configCard10.style.border = 'none'
    configCard11.style.border = 'none'

})

configCard5.addEventListener('click', async () => {
    tocarESalvarMusica('background_songs/Billie Jean.mp3', "card5");
    barSoundImg.src = 'background_songs_covers/sweet.jpg'
    configCard1Img.classList.remove('rodarCard')
    configCard2Img.classList.remove('rodarCard')
    configCard3Img.classList.remove('rodarCard')
    configCard4Img.classList.remove('rodarCard')
    configCard5Img.classList.add('rodarCard')
    configCard6Img.classList.remove('rodarCard')
    configCard7Img.classList.remove('rodarCard')
    configCard8Img.classList.remove('rodarCard')
    configCard9Img.classList.remove('rodarCard')
    configCard10Img.classList.remove('rodarCard')
    configCard1.style.borderRadius = '0px'
    configCard2.style.borderRadius = '0px'
    configCard3.style.borderRadius = '0px'
    configCard4.style.borderRadius = '0px'
    configCard5.style.borderRadius = '50%'
    configCard6.style.borderRadius = '0px'
    configCard7.style.borderRadius = '0px'
    configCard8.style.borderRadius = '0px'
    configCard9.style.borderRadius = '0px'
    configCard10.style.borderRadius = '0px'
    configCard1.style.border = 'none'
configCard2.style.border = 'none'
configCard3.style.border = 'none'
configCard4.style.border = 'none'
configCard5.style.border = '4.5px solid red'
configCard6.style.border = 'none'
configCard7.style.border = 'none'
configCard8.style.border = 'none'
configCard9.style.border = 'none'
configCard10.style.border = 'none'
    configCard11.style.border = 'none'

})

configCard6.addEventListener('click', async () => {
    tocarESalvarMusica('background_songs/Never gonna.mp3', "card6");
    barSoundImg.src = 'background_songs_covers/never.jpg'
    configCard1Img.classList.remove('rodarCard')
    configCard2Img.classList.remove('rodarCard')
    configCard3Img.classList.remove('rodarCard')
    configCard4Img.classList.remove('rodarCard')
    configCard5Img.classList.remove('rodarCard')
    configCard6Img.classList.add('rodarCard')
    configCard7Img.classList.remove('rodarCard')
    configCard8Img.classList.remove('rodarCard')
    configCard9Img.classList.remove('rodarCard')
    configCard10Img.classList.remove('rodarCard')
    configCard1.style.borderRadius = '0px'
    configCard2.style.borderRadius = '0px'
    configCard3.style.borderRadius = '0px'
    configCard4.style.borderRadius = '0px'
    configCard5.style.borderRadius = '0px'
    configCard6.style.borderRadius = '50%'
    configCard7.style.borderRadius = '0px'
    configCard8.style.borderRadius = '0px'
    configCard9.style.borderRadius = '0px'
    configCard10.style.borderRadius = '0px'
    configCard1.style.border = 'none'
configCard2.style.border = 'none'
configCard3.style.border = 'none'
configCard4.style.border = 'none'
configCard5.style.border = 'none'
configCard6.style.border = '4.5px solid red'
configCard7.style.border = 'none'
configCard8.style.border = 'none'
configCard9.style.border = 'none'
configCard10.style.border = 'none'
    configCard11.style.border = 'none'

})

configCard7.addEventListener('click', async () => {
    tocarESalvarMusica("background_songs/Milli Vanilli - Girl You Know It's True Instrumental - Channel3 (youtube).mp3", "card7");
    barSoundImg.src = 'background_songs_covers/milli vanili.jpg'
    configCard1Img.classList.remove('rodarCard')
    configCard2Img.classList.remove('rodarCard')
    configCard3Img.classList.remove('rodarCard')
    configCard4Img.classList.remove('rodarCard')
    configCard5Img.classList.remove('rodarCard')
    configCard6Img.classList.remove('rodarCard')
    configCard7Img.classList.add('rodarCard')
    configCard8Img.classList.remove('rodarCard')
    configCard9Img.classList.remove('rodarCard')
    configCard10Img.classList.remove('rodarCard')
    configCard1.style.borderRadius = '0px'
    configCard2.style.borderRadius = '0px'
    configCard3.style.borderRadius = '0px'
    configCard4.style.borderRadius = '0px'
    configCard5.style.borderRadius = '0px'
    configCard6.style.borderRadius = '0px'
    configCard7.style.borderRadius = '50%'
    configCard8.style.borderRadius = '0px'
    configCard9.style.borderRadius = '0px'
    configCard10.style.borderRadius = '0px'
    configCard1.style.border = 'none'
configCard2.style.border = 'none'
configCard3.style.border = 'none'
configCard4.style.border = 'none'
configCard5.style.border = 'none'
configCard6.style.border = 'none'
configCard7.style.border = '4.5px solid red'
configCard8.style.border = 'none'
configCard9.style.border = 'none'
configCard10.style.border = 'none'
    configCard11.style.border = 'none'

})

configCard8.addEventListener('click', async () => {
    tocarESalvarMusica("background_songs/Another One Bites The Dust - Instrumental - Defining Awesome (youtube).mp3", "card8");
    barSoundImg.src = 'background_songs_covers/another_one.jpg'
    configCard1Img.classList.remove('rodarCard')
    configCard2Img.classList.remove('rodarCard')
    configCard3Img.classList.remove('rodarCard')
    configCard4Img.classList.remove('rodarCard')
    configCard5Img.classList.remove('rodarCard')
    configCard6Img.classList.remove('rodarCard')
    configCard7Img.classList.remove('rodarCard')
    configCard8Img.classList.add('rodarCard')
    configCard9Img.classList.remove('rodarCard')
    configCard10Img.classList.remove('rodarCard')
    configCard1.style.borderRadius = '0px'
    configCard2.style.borderRadius = '0px'
    configCard3.style.borderRadius = '0px'
    configCard4.style.borderRadius = '0px'
    configCard5.style.borderRadius = '0px'
    configCard6.style.borderRadius = '0px'
    configCard7.style.borderRadius = '0px'
    configCard8.style.borderRadius = '50%'
    configCard9.style.borderRadius = '0px'
    configCard10.style.borderRadius = '0px'
    configCard1.style.border = 'none'
configCard2.style.border = 'none'
configCard3.style.border = 'none'
configCard4.style.border = 'none'
configCard5.style.border = 'none'
configCard6.style.border = 'none'
configCard7.style.border = 'none'
configCard8.style.border = '4.5px solid red'
configCard9.style.border = 'none'
configCard10.style.border = 'none'
    configCard11.style.border = 'none'

})

configCard9.addEventListener('click', async () => {
    tocarESalvarMusica("background_songs/Technotronic - Pump Up The Jam (Radio Edit) (INSTRUMENTAL) --Space Jam - C Coh (youtube).mp3", "card9");
    barSoundImg.src = 'background_songs_covers/pump.jpg'
    configCard1Img.classList.remove('rodarCard')
    configCard2Img.classList.remove('rodarCard')
    configCard3Img.classList.remove('rodarCard')
    configCard4Img.classList.remove('rodarCard')
    configCard5Img.classList.remove('rodarCard')
    configCard6Img.classList.remove('rodarCard')
    configCard7Img.classList.remove('rodarCard')
    configCard8Img.classList.remove('rodarCard')
    configCard9Img.classList.add('rodarCard')
    configCard10Img.classList.remove('rodarCard')
    configCard1.style.borderRadius = '0px'
    configCard2.style.borderRadius = '0px'
    configCard3.style.borderRadius = '0px'
    configCard4.style.borderRadius = '0px'
    configCard5.style.borderRadius = '0px'
    configCard6.style.borderRadius = '0px'
    configCard7.style.borderRadius = '0px'
    configCard8.style.borderRadius = '0px'
    configCard9.style.borderRadius = '50%'
    configCard10.style.borderRadius = '0px'
    configCard1.style.border = 'none'
configCard2.style.border = 'none'
configCard3.style.border = 'none'
configCard4.style.border = 'none'
configCard5.style.border = 'none'
configCard6.style.border = 'none'
configCard7.style.border = 'none'
configCard8.style.border = 'none'
configCard9.style.border = '4.5px solid red'
configCard10.style.border = 'none'
    configCard11.style.border = 'none'

})

configCard10.addEventListener('click', async () => {
    tocarESalvarMusica("background_songs/Michael Jackson - Beat It (Instrumental) - Daniela Acuña (youtube).mp3", "card10");
    barSoundImg.src = 'background_songs_covers/Beat_It.jpg'
    configCard1Img.classList.remove('rodarCard')
    configCard2Img.classList.remove('rodarCard')
    configCard3Img.classList.remove('rodarCard')
    configCard4Img.classList.remove('rodarCard')
    configCard5Img.classList.remove('rodarCard')
    configCard6Img.classList.remove('rodarCard')
    configCard7Img.classList.remove('rodarCard')
    configCard8Img.classList.remove('rodarCard')
    configCard9Img.classList.remove('rodarCard')
    configCard10Img.classList.add('rodarCard')
    configCard1.style.borderRadius = '0px'
    configCard2.style.borderRadius = '0px'
    configCard3.style.borderRadius = '0px'
    configCard4.style.borderRadius = '0px'
    configCard5.style.borderRadius = '0px'
    configCard6.style.borderRadius = '0px'
    configCard7.style.borderRadius = '0px'
    configCard8.style.borderRadius = '0px'
    configCard9.style.borderRadius = '0px'
    configCard10.style.borderRadius = '50%'
    configCard1.style.border = 'none'
configCard2.style.border = 'none'
configCard3.style.border = 'none'
configCard4.style.border = 'none'
configCard5.style.border = 'none'
configCard6.style.border = 'none'
configCard7.style.border = 'none'
configCard8.style.border = 'none'
configCard9.style.border = 'none'
configCard10.style.border = '4.5px solid red'
    configCard11.style.border = 'none'

})

configCard11.addEventListener('click', async () => {
    backgroundSongId.pause()
    backgroundSongId.currentTime = 0;
    localStorage.setItem('backgroundSong', 'NULO');
    localStorage.setItem('cardSalvo', 'card11');
    barSoundImg.src = 'icons/Erro.png'
    configCard1Img.classList.remove('rodarCard')
    configCard2Img.classList.remove('rodarCard')
    configCard3Img.classList.remove('rodarCard')
    configCard4Img.classList.remove('rodarCard')
    configCard5Img.classList.remove('rodarCard')
    configCard6Img.classList.remove('rodarCard')
    configCard7Img.classList.remove('rodarCard')
    configCard8Img.classList.remove('rodarCard')
    configCard9Img.classList.remove('rodarCard')
    configCard10Img.classList.remove('rodarCard')
    configCard1.style.borderRadius = '0px'
    configCard2.style.borderRadius = '0px'
    configCard3.style.borderRadius = '0px'
    configCard4.style.borderRadius = '0px'
    configCard5.style.borderRadius = '0px'
    configCard6.style.borderRadius = '0px'
    configCard7.style.borderRadius = '0px'
    configCard8.style.borderRadius = '0px'
    configCard9.style.borderRadius = '0px'
    configCard10.style.borderRadius = '0px'
    configCard1.style.border = 'none'
configCard2.style.border = 'none'
configCard3.style.border = 'none'
configCard4.style.border = 'none'
configCard5.style.border = 'none'
configCard6.style.border = 'none'
configCard7.style.border = 'none'
configCard8.style.border = 'none'
configCard9.style.border = 'none'
configCard10.style.border = 'none'
configCard11.style.border = '4.5px solid red'
})

configCard1.addEventListener('focusin', () => {
    sMovingCard.currentTime = 0;
    sMovingCard.play();
});

// Card 2
configCard2.addEventListener('focusin', () => {
    sMovingCard.currentTime = 0;
    sMovingCard.play();
});

// Card 3
configCard3.addEventListener('focusin', () => {
    sMovingCard.currentTime = 0;
    sMovingCard.play();
});

// Card 4
configCard4.addEventListener('focusin', () => {
    sMovingCard.currentTime = 0;
    sMovingCard.play();
});

// Card 5
configCard5.addEventListener('focusin', () => {
    sMovingCard.currentTime = 0;
    sMovingCard.play();
});

// Card 6
configCard6.addEventListener('focusin', () => {
    sMovingCard.currentTime = 0;
    sMovingCard.play();
});

// Card 7
configCard7.addEventListener('focusin', () => {
    sMovingCard.currentTime = 0;
    sMovingCard.play();
});

// Card 8
configCard8.addEventListener('focusin', () => {
    sMovingCard.currentTime = 0;
    sMovingCard.play();
});

// Card 9
configCard9.addEventListener('focusin', () => {
    sMovingCard.currentTime = 0;
    sMovingCard.play();
});

// Card 10
configCard10.addEventListener('focusin', () => {
    sMovingCard.currentTime = 0;
    sMovingCard.play();
});


window.addEventListener('DOMContentLoaded', () => {
    const musicaSalva = localStorage.getItem('backgroundSong');
    
    if (musicaSalva) {
        if(musicaSalva == 'NULO'){
            barSoundImg.src = 'icons/Erro.png'
            return
        }
        backgroundSongId.src = musicaSalva;
        if(musicaSalva == 'background_songs/GTA_ San Andreas - Main Theme _ Michael Hunter - _Theme from San Andreas_.mp3'){
            barSoundImg.src = 'background_songs_covers/gta-san-andreas.png'
            configCard1Img.classList.add('rodarCard')
            configCard2Img.classList.remove('rodarCard')
            configCard3Img.classList.remove('rodarCard')
            configCard4Img.classList.remove('rodarCard')
            configCard5Img.classList.remove('rodarCard')
            configCard6Img.classList.remove('rodarCard')
            configCard7Img.classList.remove('rodarCard')
            configCard8Img.classList.remove('rodarCard')
            configCard9Img.classList.remove('rodarCard')
            configCard10Img.classList.remove('rodarCard')
            configCard1.style.borderRadius = '50%'
            configCard2.style.borderRadius = '0px'
            configCard3.style.borderRadius = '0px'
            configCard4.style.borderRadius = '0px'
            configCard5.style.borderRadius = '0px'
            configCard6.style.borderRadius = '0px'
            configCard7.style.borderRadius = '0px'
            configCard8.style.borderRadius = '0px'
            configCard9.style.borderRadius = '0px'
            configCard10.style.borderRadius = '0px'
            configCard1.style.border = '4.5px solid rgb(255, 97, 5)'
            configCard2.style.border = 'none'
            configCard3.style.border = 'none'
            configCard4.style.border = 'none'
            configCard5.style.border = 'none'
            configCard6.style.border = 'none'
            configCard7.style.border = 'none'
            configCard8.style.border = 'none'
            configCard9.style.border = 'none'
            configCard10.style.border = 'none'
            configCard11.style.border = 'none'
        } else if(musicaSalva == 'background_songs_covers//240305-mj-billiejean-single.jpg'){
            barSoundImg.src = 'background_songs_covers//240305-mj-billiejean-single.jpg'
            configCard1Img.classList.remove('rodarCard')
            configCard2Img.classList.add('rodarCard')
            configCard3Img.classList.remove('rodarCard')
            configCard4Img.classList.remove('rodarCard')
            configCard5Img.classList.remove('rodarCard')
            configCard6Img.classList.remove('rodarCard')
            configCard7Img.classList.remove('rodarCard')
            configCard8Img.classList.remove('rodarCard')
            configCard9Img.classList.remove('rodarCard')
            configCard10Img.classList.remove('rodarCard')
            configCard1.style.borderRadius = '0px'
            configCard2.style.borderRadius = '50%'
            configCard3.style.borderRadius = '0px'
            configCard4.style.borderRadius = '0px'
            configCard5.style.borderRadius = '0px'
            configCard6.style.borderRadius = '0px'
            configCard7.style.borderRadius = '0px'
            configCard8.style.borderRadius = '0px'
            configCard9.style.borderRadius = '0px'
            configCard10.style.borderRadius = '0px'
            configCard1.style.border = 'none'
            configCard2.style.border = '4.5px solid red'
            configCard3.style.border = 'none'
            configCard4.style.border = 'none'
            configCard5.style.border = 'none'
            configCard6.style.border = 'none'
            configCard7.style.border = 'none'
            configCard8.style.border = 'none'
            configCard9.style.border = 'none'
            configCard10.style.border = 'none'
        } else if(musicaSalva == "background_songs/Bon Jovi - Livin' on a Prayer (Instrumental) - HQRockNRollMusic (youtube).mp3"){
            barSoundImg.src = 'background_songs_covers//livin.jpg'
            configCard1Img.classList.remove('rodarCard')
            configCard2Img.classList.remove('rodarCard')
            configCard3Img.classList.add('rodarCard')
            configCard4Img.classList.remove('rodarCard')
            configCard5Img.classList.remove('rodarCard')
            configCard6Img.classList.remove('rodarCard')
            configCard7Img.classList.remove('rodarCard')
            configCard8Img.classList.remove('rodarCard')
            configCard9Img.classList.remove('rodarCard')
            configCard10Img.classList.remove('rodarCard')
            configCard1.style.borderRadius = '0px'
            configCard2.style.borderRadius = '0px'
            configCard3.style.borderRadius = '50%'
            configCard4.style.borderRadius = '0px'
            configCard5.style.borderRadius = '0px'
            configCard6.style.borderRadius = '0px'
            configCard7.style.borderRadius = '0px'
            configCard8.style.borderRadius = '0px'
            configCard9.style.borderRadius = '0px'
            configCard10.style.borderRadius = '0px'
            configCard1.style.borderRadius = '0px'
            configCard1.style.border = 'none'
            configCard2.style.border = 'none'
            configCard3.style.border = '4.5px solid red'
            configCard4.style.border = 'none'
            configCard5.style.border = 'none'
            configCard6.style.border = 'none'
            configCard7.style.border = 'none'
            configCard8.style.border = 'none'
            configCard9.style.border = 'none'
            configCard10.style.border = 'none'
        } else if(musicaSalva == "background_songs/MC Hammer - U Can't Touch This (Instrumental) - Black Watch (youtube).mp3"){
            barSoundImg.src = 'background_songs_covers/sweet.jpg'
                configCard1Img.classList.remove('rodarCard')
                configCard2Img.classList.remove('rodarCard')
                configCard3Img.classList.remove('rodarCard')
                configCard4Img.classList.add('rodarCard')
                configCard5Img.classList.remove('rodarCard')
                configCard6Img.classList.remove('rodarCard')
                configCard7Img.classList.remove('rodarCard')
                configCard8Img.classList.remove('rodarCard')
                configCard9Img.classList.remove('rodarCard')
                configCard10Img.classList.remove('rodarCard')
                configCard1.style.borderRadius = '0px'
                configCard2.style.borderRadius = '0px'
                configCard3.style.borderRadius = '0px'
                configCard4.style.borderRadius = '50%'
                configCard5.style.borderRadius = '0px'
                configCard6.style.borderRadius = '0px'
                configCard7.style.borderRadius = '0px'
                configCard8.style.borderRadius = '0px'
                configCard9.style.borderRadius = '0px'
                configCard10.style.borderRadius = '0px'
                configCard1.style.border = 'none'
                configCard2.style.border = 'none'
                configCard3.style.border = 'none'
                configCard4.style.border = '4.5px solid red'
                configCard5.style.border = 'none'
                configCard6.style.border = 'none'
                configCard7.style.border = 'none'
                configCard8.style.border = 'none'
                configCard9.style.border = 'none'
                configCard10.style.border = 'none'
        } else if(musicaSalva == 'background_songs/Never gonna.mp3'){
            barSoundImg.src = 'background_songs_covers/never.jpg'
                configCard1Img.classList.remove('rodarCard')
                configCard2Img.classList.remove('rodarCard')
                configCard3Img.classList.remove('rodarCard')
                configCard4Img.classList.remove('rodarCard')
                configCard5Img.classList.remove('rodarCard')
                configCard6Img.classList.add('rodarCard')
                configCard7Img.classList.remove('rodarCard')
                configCard8Img.classList.remove('rodarCard')
                configCard9Img.classList.remove('rodarCard')
                configCard10Img.classList.remove('rodarCard')
                configCard1.style.borderRadius = '0px'
                configCard2.style.borderRadius = '0px'
                configCard3.style.borderRadius = '0px'
                configCard4.style.borderRadius = '0px'
                configCard5.style.borderRadius = '0px'
                configCard6.style.borderRadius = '50%'
                configCard7.style.borderRadius = '0px'
                configCard8.style.borderRadius = '0px'
                configCard9.style.borderRadius = '0px'
                configCard10.style.borderRadius = '0px'
                configCard1.style.border = 'none'
                configCard2.style.border = 'none'
                configCard3.style.border = 'none'
                configCard4.style.border = 'none'
                configCard5.style.border = 'none'
                configCard6.style.border = '4.5px solid red'
                configCard7.style.border = 'none'
                configCard8.style.border = 'none'
                configCard9.style.border = 'none'
                configCard10.style.border = 'none'
        } else if(musicaSalva == "background_songs/Milli Vanilli - Girl You Know It's True Instrumental - Channel3 (youtube).mp3"){
            barSoundImg.src = 'background_songs_covers/milli vanili.jpg'
                configCard1Img.classList.remove('rodarCard')
                configCard2Img.classList.remove('rodarCard')
                configCard3Img.classList.remove('rodarCard')
                configCard4Img.classList.remove('rodarCard')
                configCard5Img.classList.remove('rodarCard')
                configCard6Img.classList.remove('rodarCard')
                configCard7Img.classList.add('rodarCard')
                configCard8Img.classList.remove('rodarCard')
                configCard9Img.classList.remove('rodarCard')
                configCard10Img.classList.remove('rodarCard')
                configCard1.style.borderRadius = '0px'
                configCard2.style.borderRadius = '0px'
                configCard3.style.borderRadius = '0px'
                configCard4.style.borderRadius = '0px'
                configCard5.style.borderRadius = '0px'
                configCard6.style.borderRadius = '0px'
                configCard7.style.borderRadius = '50%'
                configCard8.style.borderRadius = '0px'
                configCard9.style.borderRadius = '0px'
                configCard10.style.borderRadius = '0px'
                configCard1.style.border = 'none'
                configCard2.style.border = 'none'
                configCard3.style.border = 'none'
                configCard4.style.border = 'none'
                configCard5.style.border = 'none'
                configCard6.style.border = 'none'
                configCard7.style.border = '4.5px solid red'
                configCard8.style.border = 'none'
                configCard9.style.border = 'none'
                configCard10.style.border = 'none'
        } else if(musicaSalva == 'background_songs/Another One Bites The Dust - Instrumental - Defining Awesome (youtube).mp3'){
            barSoundImg.src = 'background_songs_covers/another_one.jpg'
                configCard1Img.classList.remove('rodarCard')
                configCard2Img.classList.remove('rodarCard')
                configCard3Img.classList.remove('rodarCard')
                configCard4Img.classList.remove('rodarCard')
                configCard5Img.classList.remove('rodarCard')
                configCard6Img.classList.remove('rodarCard')
                configCard7Img.classList.remove('rodarCard')
                configCard8Img.classList.add('rodarCard')
                configCard9Img.classList.remove('rodarCard')
                configCard10Img.classList.remove('rodarCard')
                configCard1.style.borderRadius = '0px'
                configCard2.style.borderRadius = '0px'
                configCard3.style.borderRadius = '0px'
                configCard4.style.borderRadius = '0px'
                configCard5.style.borderRadius = '0px'
                configCard6.style.borderRadius = '0px'
                configCard7.style.borderRadius = '0px'
                configCard8.style.borderRadius = '50%'
                configCard9.style.borderRadius = '0px'
                configCard10.style.borderRadius = '0px'
                configCard1.style.border = 'none'
                configCard2.style.border = 'none'
                configCard3.style.border = 'none'
                configCard4.style.border = 'none'
                configCard5.style.border = 'none'
                configCard6.style.border = 'none'
                configCard7.style.border = 'none'
                configCard8.style.border = '4.5px solid red'
                configCard9.style.border = 'none'
                configCard10.style.border = 'none'
        } else if(musicaSalva == 'background_songs/Technotronic - Pump Up The Jam (Radio Edit) (INSTRUMENTAL) --Space Jam - C Coh (youtube).mp3'){
            barSoundImg.src = 'background_songs_covers/pump.jpg'
                configCard1Img.classList.remove('rodarCard')
                configCard2Img.classList.remove('rodarCard')
                configCard3Img.classList.remove('rodarCard')
                configCard4Img.classList.remove('rodarCard')
                configCard5Img.classList.remove('rodarCard')
                configCard6Img.classList.remove('rodarCard')
                configCard7Img.classList.remove('rodarCard')
                configCard8Img.classList.remove('rodarCard')
                configCard9Img.classList.add('rodarCard')
                configCard10Img.classList.remove('rodarCard')
                configCard1.style.borderRadius = '0px'
                configCard2.style.borderRadius = '0px'
                configCard3.style.borderRadius = '0px'
                configCard4.style.borderRadius = '0px'
                configCard5.style.borderRadius = '0px'
                configCard6.style.borderRadius = '0px'
                configCard7.style.borderRadius = '0px'
                configCard8.style.borderRadius = '0px'
                configCard9.style.borderRadius = '50%'
                configCard10.style.borderRadius = '0px'
                configCard1.style.border = 'none'
                configCard2.style.border = 'none'
                configCard3.style.border = 'none'
                configCard4.style.border = 'none'
                configCard5.style.border = 'none'
                configCard6.style.border = 'none'
                configCard7.style.border = 'none'
                configCard8.style.border = 'none'
                configCard9.style.border = '4.5px solid red'
                configCard10.style.border = 'none'
        } else if(musicaSalva == 'background_songs/Michael Jackson - Beat It (Instrumental) - Daniela Acuña (youtube).mp3'){
            barSoundImg.src = 'background_songs_covers/Beat_It.jpg'
                configCard1Img.classList.remove('rodarCard')
                configCard2Img.classList.remove('rodarCard')
                configCard3Img.classList.remove('rodarCard')
                configCard4Img.classList.remove('rodarCard')
                configCard5Img.classList.remove('rodarCard')
                configCard6Img.classList.remove('rodarCard')
                configCard7Img.classList.remove('rodarCard')
                configCard8Img.classList.remove('rodarCard')
                configCard9Img.classList.remove('rodarCard')
                configCard10Img.classList.add('rodarCard')
                configCard1.style.borderRadius = '0px'
                configCard2.style.borderRadius = '0px'
                configCard3.style.borderRadius = '0px'
                configCard4.style.borderRadius = '0px'
                configCard5.style.borderRadius = '0px'
                configCard6.style.borderRadius = '0px'
                configCard7.style.borderRadius = '0px'
                configCard8.style.borderRadius = '0px'
                configCard9.style.borderRadius = '0px'
                configCard10.style.borderRadius = '50%'
                configCard1.style.border = 'none'
                configCard2.style.border = 'none'
                configCard3.style.border = 'none'
                configCard4.style.border = 'none'
                configCard5.style.border = 'none'
                configCard6.style.border = 'none'
                configCard7.style.border = 'none'
                configCard8.style.border = 'none'
                configCard9.style.border = 'none'
                configCard10.style.border = '4.5px solid red'
        }
        backgroundSongId.play().catch(e => alert("Aguardando interação para tocar áudio."));
    }
});

configBackButton.addEventListener('click', () => {
    config.classList.remove('playGameAnimation')
    config.style.display = 'none'
    header.inert = true
    menu.inert = false
    menuHolder.inert = false
    config.inert = true
    sLeavingGame.play()
    menuConfig.focus()
})

menuConfig.addEventListener('click', () => {
    config.style.display = 'flex'
    config.classList.add('playGameAnimation')
    frameHolder.inert = true
    searchPs1Holder.inert = true
    searchPs2Holder.inert = true
    search.inert = true
    background.inert = true
    header.inert = true
    info.inert = true
    config.inert = false
    library.inert = true
    menuHolder.inert = true
    menuHolder.style.display = 'flex'
    configBackButton.focus()
    sJoinGame.play()
})



configSound.addEventListener('focusin', () => {
    configSoundBox.style.display = 'flex'
})





const volumeSlider = document.getElementById('volume-slider');

volumeSlider.addEventListener('input', (event) => {
    const valor = event.target.value;
    backgroundSongId.volume = valor;
});

const menuExitTela = document.getElementById('menuExitTela')
const menuExitTelaSim = document.getElementById('menuExitTelaSim')
const menuExitTelaNao = document.getElementById('menuExitTelaNao')
const menuExitTelaBoxer = document.getElementById('menuExitTelaBoxer')


menuExit.addEventListener('click', () => {
    menuExitTela.style.display = 'flex'
    menuExitTelaBoxer.style.display = 'flex'
    sJoinGame.play()
    menuExitTelaNao.focus()
    menuHolder.inert = true
})

menuExitTelaNao.addEventListener('click', () => {
    menuExitTela.style.display = 'none'
    menuHolder.inert = false
    menuHome.focus()
})

menuExitTelaSim.addEventListener('click', () => {
    window.electronAPI.sairDoApp();
})





searchPlataformsButtonPs3.style.display = 'none'
searchPlataformsButtonXbox360.style.display = 'none'


window.addEventListener('focusin', () => {
  console.log("Elemento focado agora:", document.activeElement.id);
});