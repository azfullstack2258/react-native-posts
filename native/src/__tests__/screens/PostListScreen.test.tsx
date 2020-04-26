import React from 'react';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });
import PostListScreen from '../../screens/PostListScreen';

const middlewares = [createSagaMiddleware()];
const mockStore = configureStore(middlewares);

const store = mockStore({
  post: {
    isLoading: false,
    posts: [
      {
        id: 'a6cc3a8c-db06-4314-8a67-64687f065fe6',
        title: 'CQB',
        body:
          '# Cinnama gelido\n\n## Vale lupi in moles laqueis verborum illis\n\nLorem markdownum inmemor et accipiunt ferrumque natorum canis; retemptat comas\namori cortex! Gratamque *tellus* Tectaphon nisi, nam esse mota faticano altera,\nero mihi nec. Consurgere sidera casa, ubi ira nodosaque magnasque fertque\nrobustior curae spectare ipsa: habet attrahite, inhibere et.\n\n> Satis fluitantia semper; **idem moventem**, pugnat vis neve, rogant? Simul\n> faece lingua, pater quia, haut sunt Sinis breve artes. Lata labor extensus et\n> caelo occidimus concurrere foliis naturale turbida si eripuit. Me loquendi\n> pelagi pulcherrima, quibus militiae si omnes, perdidit o Gryneus vulnera: est\n> in cursu moresque. Aquarum cesserat, candescere Lacinia labori sume: sed et\n> pondere **iuppiter gentis**?\n\n## Sumptaque meritum\n\nTua tacito illa et telum caeli, vomere Hesperio caligine! Specie isse serpens\nEryx limen **postquam senis**! Gaudet omnes, est locus non nymphae rupit.\n\n- Quondam rapimur annis\n- Mansit in sic femori et poterit causam\n- Crenaee harenas Asopidos nymphas caelestia odere tum\n- A ignes linguae terra et certior aliquid\n\n## Suoque fetus vultus bimembres semper quam proiecerat\n\nAgmen [apud inamoenaque](http://www.amorem.com/teante) tremulasque attonitamque\ninpatiens diversa palude pulsant visus actum, iamque veni nato pia sublimemque\nposset frusta, tumidaeque. Mihi *quoque aliter bracchia*; in per **ensem** erat\nquodsi adhuc ad arbore. Nympha obstantia mensura Neptunum [frugum\nterras](http://desilitspernenda.net/inmeriti-positique). [Carbasa et\ncaput](http://patriisfama.net/) corpore, in fama meminere mutato illius dies, me\nTroia, fuerat cum!\n\n> Nox fecitque superare abest ad recens erat, duos movi auraeque pignora.\n> Nebulas tecumque, suo di divinae, et lenimen meminisse per. Tibi hac male\n> vocant membra iussa tuo sollertius anxia, nunc conplerunt Telamoniades rediret\n> quique! In lingua plumbo; cunctis in Troiae talia lanas nil iam Cyprio sitim?\n\nGlaeba poscitur delphine amborum, fuit viam relinqui quassasque carpat lumina;\n*nepoti cursus* resupinoque patre, en. Mecum ista captas sua quae ad liquida\nvoces [ut](http://cornibus-acto.com/) erat. Velint ille, non haec!',
        publishedAt: '2015-12-29T22:37:00.000Z',
        author: {
          id: '95304003-31c8-4aa8-9dd6-d5af7810d621',
          name: 'Jeff Woolnough',
        },
      },
      {
        id: 'f30b0c7f-e615-4917-98fe-f4f90d74fffc',
        title: 'Rock Bottom',
        body:
          '# Hoc ter enim serae centum\n\n## Animae innumeras habuisse ulla saepe\n\nLorem markdownum, nostrum fatetur suo silet subiecta, adfuit. Rerumque indoctum\nvesicam caput, est sed potentes!\n\nExcepi nutu ferarum niger temeraria biiugum parte, ut sed sed Ulixes revocantis\nmovisse Sperchionidenque nurusque momentaque. Cornua gravidae fugientis decus et\nrelinqui ignota effugit; mare addit, AI.\n\n## Sit a sive\n\nNarrare artes, saxo coniuge nullus inveniunt suum conserto, et natus! Terra\nmatura procul magna [visum](http://www.dixisse.org/violentiorvocant), figuris de\npartus tempusque [Tellus lumine](http://www.nefasquesparsas.com/inmenso); isset\nequo. Vagina vox neve aliquid partibus.\n\nCui huc custodia frigore cetera deos. Coegerat iam\n[differt](http://timoris.com/) orbem, longo Echo, auras adspicis [et viribus\ntotidem](http://labores.com/non-tabellis.php). Tutissimus erat extemplo et\npetens limitibus effundit tellure haberet iuncta, novissima insistere vultu, ita\ncanem?\n\n## Perterrita et sopire excipiunt mirabile undis pars\n\nArmorum [ire mihi](http://modo.io/medio)? Iustis *nostram ipse* dictis inferiora\nvenabula fuisset, eurytus saucius.\n\n> Pectora fuerat **lupum Achilles o**! Natum non fudi [natus est\n> Liberfemineae](http://iniustum-palus.org/) habet; spes mihi deserto capiat\n> tamen.\n\n## Cinyras quod\n\nNocte Victoria at simili cumque Theseus vidi. Dixit pomi alis Britannos parenti\nsine nullo perfida a medio penates meris?\n\n> Plumbo abest hanc barbae; comitique euntis. Harenas posse; **in** dolore,\n> primaque ab quove, pio est et, quos quidem facta, concussaque **natam**.\n> Vultusque est esset gelidoque relicta refers comas et motu sine, tum diu;\n> natas, sati pennas feritatis. Quoque ieiunia redditur viveret tela ossibus\n> anguibus prima, omnipotens linguis.\n\nEt sed fuga quadriiugo erat perdiderint tororum semper postquam fiducia. Thebae\nde sub zephyris cruor libatos violenta. Nota auras fallente pendenti lacrimas\nhomines, sole malignas, Caencu et posuere, *alto*. Certatim quid manus aliis et\net caput proles obstipuere illa Te puer reluxit!',
        publishedAt: '2016-01-12T20:17:00.000Z',
        author: {
          id: 'c4016fc5-01cc-4447-a011-7924dcb659b6',
          name: 'Rob Lieberman',
        },
      },
      {
        id: '2f1fe9c0-bdbf-4104-bee2-3c0ec514436f',
        title: 'Dulcinea',
        body:
          '# Omnibus quae\n\n## Sit sed inque teneris\n\nLorem markdownum adhuc securosque, suo ponto satae se adhuc, terga. Fuit campus,\nqui, quod **formasque coeunt artus**, certamina nurus nunc coniuge peregit ritu.\nSuperat funera perque ferrem corpora saevam caespite nam maternaque sumpserat.\n\nIuga adest? Humano percussit Haemum frugis, vix qua quae iniustaque et tibi,\ntenuisset vix lacrimis umbra, ire. Ante nec. Est deam vivum ad ponti, non\ncaelamina et Sisyphon, inhonestaque atque, sed et vivit.\n\n1. Litora gloria Hyperionis carmina ungulaque patiere\n2. Dari nasci\n3. Fragilesque tendo dixit resonant quoque\n4. Et segnibus fuge ter Armeniae templi\n5. Sit deponere credit non aquarum Achilles tenus\n6. Exsultat artes Iovi\n\nStupet honoris. Nunc angebar Dryasque.\n\n## Multamque siqua hospitibus patrio\n\nExstimulata blando; qui armis Ixion **finire laetusque** sororem, aut **et**,\nigne membra? Nec bello ramis pari, Libye percensuit metallis, *in* mediis\nprocumbere.\n\n- Et illa\n- Clanis sceleris\n- Velletque prolisque auditum\n- Res delius iraque Semeles veluti\n- Cava umor quid superest fama artus\n\nTutam auditurum ab erit sum frigore in fleturi vectus eodem *quinos capillos me*\nagros. Ut rogis **foret cogor** neve ultoris rabiem, pro perque meque ossa\n[alter fassusque](http://www.querellissacra.com/reminiscitur) proxima erigitur,\nest *occulte concutio*. Celsa Echo huc credunt natus leones racemifero condi\nPhlegyanque esse; suis, per. Versum fessam me reponit omnis demisere litore\ncorpora esse expers veteris Noctisque.\n\n1. Inhaerebat undas ungula pulsat subiit modo\n2. Madefacta Cyanen\n3. Qua ex Tartessia nulla dixi illum lumina\n4. Et et viridi serpens ast longoque agros\n5. Aras nos arma medium consonat cum desit\n6. Facta ille ego\n\nFibris animo. Tui nota quod iter caeli mirata pede paulatim purpureum tergo\nseptemplicis? Progenies ait. Patrios sis est exclamat exiguo Myrrha in tibi\nexarsit cum. Flagrantemque cape: iter capacem cum rerum quota pennisque pone non\npatria.',
        publishedAt: '2015-12-14T21:09:00.000Z',
        author: {
          id: '2cab326a-ab2f-4624-a6d7-2e1855fc5e4e',
          name: 'Terry McDonough',
        },
      },
      {
        id: 'e08d7dac-9fab-4b1f-85a4-153447128212',
        title: 'Retrograde',
        body:
          '# Expers custodia mundo aberant\n\n## Saxi me cursuque\n\nLorem markdownum hoc; aere profundi: ipsa sua quorum vindicet. Tepescere iuvenis\nsuam dies Haemoniae infusa herbas balatus quondam nomine minatur heros.\n\nNon cuncta posset sanguinis; toto septem coniuge poscis mentesque cavernas lucis\ndatura fuisses genu terrae sed aliquid. Ponti brevem, adiectura iubet finxit,\nper dilatant Ultima ait tristi quantum amores vetustas tenebris clamore. Hunc\nnati inplevere in ignota [nudumque ex](http://www.oreest.net/mortalibus-atria)\nbella est; non mores carmine tam veniat.\n\n> In videar officiumque, rursusque et cura interdum. Vero dixit incenduntque.\n> Legit et neve inmiscuit est, hac guttura, exit. Superata dixit totidem\n> **fessam adlabimur siqua** cecidere, reparet tu distuleratque rigorem omnes\n> peti domum, fetum tamen molle.\n\n## Patruus admoto\n\nIbi *nec incurrere mecum* et adhuc aristas, fera et limina fila dubio Lycaon\nDelphos peccavere Philyreius. Celeri quem pepercit, Aglauros et acceptum\nlinquendus *dicta sequitur*, vivere, ossa per arma, gratia. Sine **rescierit\nprior**, et iacuit Persea videt apta munere ille.\n\n    wpa_commercial = tracerouteTablet(5, 4, computer) + userBatchTerahertz(dpi)\n            / vpi_drive_website + 3;\n    var lpi = windows_fios;\n    var third_adapter_graphic = jpeg_drop_zone(soundCopy, architectureBlog(3 /\n            5));\n    oleNull -= trojan_ttl_bloatware.ide.fileUtf(backbone, 5);\n\n## Inanis lammina pugnae et\n\nDamna [pulsant antiqua](http://non-axes.io/); in potiere [sonuere\ndensus](http://www.sed-rapido.com/aquis.aspx) necari natam terribilem faciem?\nIncautum plenissima; **danda Lami**, sitim. Ab tuque totidemque corpus acies\nnaufragus adiit, de Ismenides missis Threiciis aures et inque excipit vestigia\narmentum; tradunt. Instantiaque discubuere negabo duo quoniam bello **tempora\ncorpore aethera** Nabataeaque cunis?\n\nAsterien Olenos capientibus aquatica premunt uno per suis spernite arenti est\ncape stabat tigres audit mora Thebaides flagrantemque ille. Nisi est suos sub\nrelictis summaque rettulit in diversas ira intravit replet porta addidit cum\nperque vince. Corpore mixtaque iactatam deficiunt gerens, neve amore aureus\nfluctus fraterni domum vitiorum speciem ante modo inrita.\n\n    if (2) {\n        unfriendFileVirtualization = favoritesParallel.antivirus(\n                digitizeSpoofing(interactive_drm_kbps, of));\n        snippet_word.snow_up_disk.grayscale(36665);\n        ttlIspDrag(-4);\n    }\n    if (barDriveDrive + 5 + apple_icon.node(3, printerManetTablet, mac)) {\n        e_pci.freeware_crop -= digitalPermalink(sdk_application) +\n                utf_leopard_win(kernel_key, 1, igpWebEps);\n        vfatExpansion.ctr_tiff += 4 + 4 - dual;\n        horse(optical_ntfs, seo);\n    }\n    ethics.dllDomainVlb(illegal_resolution_dv / 31);\n\nVix a tinnitibus pluma aere *turbatus alta obstabatque* tetigere potest satyri\npietas. Hederarum fugisse nomina. Haec tamen mutare!\n',
        publishedAt: '2019-12-12T11:00:00.000Z',
        author: {
          id: '5c420915-e05c-4512-bc99-ae5d48b675e0',
          name: 'David Petrarca',
        },
      },
      {
        id: 'f741e109-d927-41b2-80a0-8fea4f5bd062',
        title: 'Jetsam',
        body:
          '# Nam bene adiecisset reperta oscula\n\n## Non avus alta staret potentia\n\nLorem markdownum superiniecit liquido veniet forte emisitque simul est potes\nVeneris! Sum cum ambitione fecerit internodia putes labores Cnosiacas duxit\nhorridus Marte vindicta in sine: silices. Ambit fulmineos miserabile sacra\nTroades.\n\nSecedit nosterque inque *Iovis cruentas per* quod profuga moenia unda, dei\ndomos, dona! Festis recenti et iungit dea et monstra valvas nimiumque facit\nCumaea requiescit postquam **curaque** aquas pellor! Parvis videbar ignis: Rhesi\nvix tantum, caput, spatium, vitae; adhuc?\n\n    lun -= clockPlatform(4 + of_pci);\n    surface = fddi;\n    insertion_powerpoint_start(scanner, sdram(gigabitCode + newbieRwVertical),\n            wpa_imap_cyberspace);\n    if (desktop_document_subdirectory) {\n        record_blu += memoryMultiplatformSoftware;\n    } else {\n        twitter.screenshot += uncCopy;\n    }\n    itunes_batch_flash.illegal_raid(hexadecimalDslRam);\n\n## Caeca fraude pietate dederat\n\nEras nunc tepentibus diversis longoque delapsa inplacataeque tulerunt paternum\nablata somniferis patientia et putares terris studio mihi maximus Nec levavit.\nMansit adparuit regno lumina, praebebatque florem: ad decus Miletida, ea aprica\nfluminaque uti volutant, fixis.\n\n    lion = keyUsernameWiki;\n    spool_bandwidth_printer += copy;\n    bitrate_computing += macintosh_zettabyte;\n    ansi.requirementsNameGnu(desktopQbe);\n    multithreading = startNanometer.pinterest(archive, supplyBluFlood(\n            unicode_schema, 2) + cleanPharming + repository);\n\n## Celate ludit\n\nGeneri muneris ab navem fecit; crimina herbis humi inmodicum salutifera *caesis*\net. Novit exstant, precando erat et *potuit leviter*, intervenit passi. Imagine\ncernitis et ipsos sequitur voluisse praecordia Phlegraeis arcana nobis.\n\nMagis deploratosque quoque in, aere osque infit nec *molli Averna* quae Sisyphe\net; tantum. In lanam spretis; mea [quorum\nquodque](http://animo.io/thalamos-eratque) aurum adapertaque parebunt laniem.\n\nSed inde Diomedis tinctas certe, [non hic\natque](http://www.vobis.net/pretium-hic.html) fila. Segetes est, paulatim autem\norbe obscurus flammas sororibus enim, **num** sidoniae fratres tibi natus esse\nformas teneraque. Accipe superbus adveniet, sic [visa\nmuris](http://ramos.org/siclongum) natarum. Cum hinc accedere. Per erit unde\nnihil venistis praeside cava vos ignis *toto heres*, si.\n\nQuidem mulcebunt tangere praenuntia ferarum meministis vestes et quae audacia.\nFronte amico dextera cervix supplentur profugus inritaturque naris. Pensas\nferro! Ait diu late pressit!\n',
        publishedAt: '2019-12-12T09:00:00.000Z',
        author: {
          id: '5fd316ab-a260-45c2-9a3c-febbf79a82f1',
          name: 'Breck Eisner',
        },
      },
    ],
    selectedPost: null,
  },
  filter: {
    selectedAuthorIds: [],
  },
});

describe('Post list screen', () => {
  it('should render post list successfully', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <PostListScreen navigation={{ navigate: jest.fn() } as any} />
      </Provider>
    );
    const component = wrapper.dive();
    expect(toJson(component)).toMatchSnapshot();
  });
});
