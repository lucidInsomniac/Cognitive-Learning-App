//Sidebar data rendering: Title, icon, and link
//Link to FontAwesome: https://fontawesome.com/how-to-use/on-the-web/using-with/react
// install in CLIENT folder with command: 
// yarn add @fortawesome/fontawesome-svg-core
// yarn add @fortawesome/free-solid-svg-icons
// yarn add @fortawesome/react-fontawesome
/*You need to import the default FontAwesomeIcon in order to call on the actual icon */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
import { faCat } from '@fortawesome/free-solid-svg-icons'
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { faCarCrash} from '@fortawesome/free-solid-svg-icons'
import { faBorderNone} from '@fortawesome/free-solid-svg-icons'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

//We only need to export a component that contains an array
//of objects instead of a function
export const SidebarData = [
    {
        //Home
        title: "Home",
        path: "/",
        icon: <FontAwesomeIcon icon={faIgloo} />

    },
    {
        //ImagePuzzle
        title: "Puzzle",
        path: "/image_puzzle_list",
        icon: <FontAwesomeIcon icon={faPuzzlePiece} />,

        //dropdown sub-menu in sidebar
        subNav: [

            {   //Difficulty with 2 pieces
                title: "Puzzle Level 1",
                path: "/image_puzzle1",
                icon: <FontAwesomeIcon icon={faPuzzlePiece} />
            },
            {   //Difficulty with 3 pieces
                title: "Puzzle Level 2",
                path: "/image_puzzle2",
                icon: <FontAwesomeIcon icon={faPuzzlePiece} />
            },
            {   //Difficulty with 4 pieces
                title: "Puzzle Level 3",
                path: "/image_puzzle3",
                icon: <FontAwesomeIcon icon={faPuzzlePiece} />
            },
            {   //Difficulty with 5 pieces
                title: "Puzzle Level 4",
                path: "/image_puzzle4",
                icon: <FontAwesomeIcon icon={faPuzzlePiece} />
            }

        ]
    },
    {
        //Categories
        title: "Categories",
        path: "/categories",
        icon: <FontAwesomeIcon icon={faCat} />,

            //dropdown sub-menu in sidebar
            subNav: [

                {
                    //Categories 1
                    title: "Categories 1",
                    path: "/categories1",
                    icon: <FontAwesomeIcon icon={faCat} />
                },
                {
                    //Categories 2
                    title: "Categories 2",
                    path: "/categories2",
                    icon: <FontAwesomeIcon icon={faCat} />
                },
                {
                    //Categories 3
                    title: "Categories 3",
                    path: "/categories3",
                    icon: <FontAwesomeIcon icon={faCat} />
                },
                {
                    //Categories 4
                    title: "Categories 4",
                    path: "/categories4",
                    icon: <FontAwesomeIcon icon={faCat} />
                }

            ]
    },
    {
        //Patterns
        title: "Patterns",
        path: "/patterns",
        icon: <FontAwesomeIcon icon={faDice} />,

            //dropdown sub-menu in sidebar
            subNav: [

                {
                    //Patterns 1
                    title: "Patterns 1",
                    path: "/patterns1",
                    icon: <FontAwesomeIcon icon={faDice} />
                },
                { 
                    //Patterns 2
                    title: "Patterns 2",
                    path: "/patterns2",
                    icon: <FontAwesomeIcon icon={faDice} />
                },
                {
                    //Patterns 3
                    title: "Patterns 3",
                    path: "/patterns3",
                    icon: <FontAwesomeIcon icon={faDice} />
                },
                {
                    //Patterns 4
                    title: "Patterns 4",
                    path: "/patterns4",
                    icon: <FontAwesomeIcon icon={faDice} />
                }
                
            ]
    },
    {
        //Situations
        title: "Situations",
        path: "/situations",
        icon: <FontAwesomeIcon icon={faCarCrash} />,

            //dropdown sub-menu in sidebar
            subNav: [
                
                {
                    //Situations 1
                    title: "Situations 1",
                    path: "/situations1",
                    icon: <FontAwesomeIcon icon={faCarCrash} />
                },
                {
                    //Situations 2
                    title: "Situations 2",
                    path: "/situations2",
                    icon: <FontAwesomeIcon icon={faCarCrash} />
                },
                {
                    //Situations 3
                    title: "Situations 3",
                    path: "/situations3",
                    icon: <FontAwesomeIcon icon={faCarCrash} />
                },
                {
                    //Situations 4
                    title: "Situations 4",
                    path: "/situations4",
                    icon: <FontAwesomeIcon icon={faCarCrash} />
                }

            ]

    },
    {
        //Mosaics
        title: "Mosaics",
        path: "/mosaics",
        icon: <FontAwesomeIcon icon={faBorderNone} />,

            //dropdown sub-menu in sidebar
            subNav: [

                    {
                        //Mosaics 1
                        title: "Mosaics 1",
                        path: "/mosaics1",
                        icon: <FontAwesomeIcon icon={faBorderNone} />
                    },
                    {
                        //Mosaics 2
                        title: "Mosaics 2",
                        path: "/mosaics2",
                        icon: <FontAwesomeIcon icon={faBorderNone} />
                    },
                    {
                        //Mosaics 3
                        title: "Mosaics 3",
                        path: "/mosaics3",
                        icon: <FontAwesomeIcon icon={faBorderNone} />
                    },
                    {
                        //Mosaics 4
                        title: "Mosaics 4",
                        path: "/mosaics4",
                        icon: <FontAwesomeIcon icon={faBorderNone} />
                    },

            ]
    },
    {
        //Analogies
        title: "Analogies",
        path: "/analogies",
        icon: <FontAwesomeIcon icon={faBrain} />,

            //dropdown sub-menu in sidebar
            subNav: [

                {
                    //Analogies 1
                    title: "Analogies 1",
                    path: "/analogies1",
                    icon: <FontAwesomeIcon icon={faBrain} />
                },
                {
                    //Analogies 2
                    title: "Analogies 2",
                    path: "/analogies2",
                    icon: <FontAwesomeIcon icon={faBrain} />
                },
                {
                    //Analogies 3
                    title: "Analogies 3",
                    path: "/analogies3",
                    icon: <FontAwesomeIcon icon={faBrain} />
                },
                {
                    //Analogies 4
                    title: "Analogies 4",
                    path: "/analogies4",
                    icon: <FontAwesomeIcon icon={faBrain} />
                }
                
            ]
    },
    // {
    //     //ASLWordPlay
    //     title: "ASL Word PLay",
    //     path: "/asl_wordplay",
    //     icon: <FontAwesomeIcon icon={faBrain} />
    // },
    {
        //Resources for Parents, and Educators
        title: "Resources",
        path: "/resources",
        icon: <FontAwesomeIcon icon={faBookmark} />
    }
    
]