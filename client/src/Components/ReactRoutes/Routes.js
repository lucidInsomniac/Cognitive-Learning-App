import React from "react";
// import Route and Switch from react-router-dom
import { Route, Switch } from "react-router-dom";
//import WelcomePage component
import WelcomePage from "../WelcomePage/WelcomePage";
//import DashboardView
import DashboardView from "../Header/DashboardView";
//import the MainPuzzleView component
import MainPuzzleView from "../ImagePuzzle/MainPuzzleView";
//import Puzzle 1 component
import ImagePuzzle1View from "../ImagePuzzle/Puzzle1/ImagePuzzle1View";
//import Puzzle 2 component
import ImagePuzzle2View from "../ImagePuzzle/Puzzle2/ImagePuzzle2View";
//import Puzzle 3 component
import ImagePuzzle3View from "../ImagePuzzle/Puzzle3/ImagePuzzle3View";
//import Puzzle 4 component
import ImagePuzzle4View from "../ImagePuzzle/Puzzle4/ImagePuzzle4View";
//import CategoriesView component
import MainCategoriesView from "../Categories/MainCategoriesView";
//import Categories1View component
import Categories1View from "../Categories/Categories1/Categories1View";
//import Categories2View component
import Categories2View from "../Categories/Categories2/Categories2View";
//import Categories3View component
import Categories3View from "../Categories/Categories3/Categories3View";
//import Categories4View component
import Categories4View from "../Categories/Categories4/Categories4View";
//import Patterns1View component
import MainPatternsView from "../Patterns/MainPatternsView";
//import Patterns1View component
import Patterns1View from "../Patterns/Patterns1/Patterns1View";
//import Patterns2View component
import Patterns2View from "../Patterns/Patterns2/Patterns2View";
//import Patterns3View component
import Patterns3View from "../Patterns/Patterns3/Patterns3View";
//import Patterns4View component
import Patterns4View from "../Patterns/Patterns4/Patterns4View";
//import MainSituationsView component
import MainSituationsView from "../Situations/MainSituationsView";
//import Sitautions1View component
import Situations1View from "../Situations/Situations1/Situations1View";
//import Sitautions2View component
import Situations2View from "../Situations/Situations2/Situations2View";
//import Sitautions3View component
import Situations3View from "../Situations/Situations3/Situations3View";
//import Sitautions4View component
import Situations4View from "../Situations/Situations4/Situations4View";
//import MainMosaicsView component
import MainMosaicsView from "../Mosaics/MainMosaicsView";
//import Mosaics1View component
import Mosaics1View from "../Mosaics/Mosaics1/Mosaics1View";
//import Mosaics2View component
import Mosaics2View from "../Mosaics/Mosaics2/Mosaics2View";
//import Mosaics3View component
import Mosaics3View from "../Mosaics/Mosaics3/Mosaics3View";
//import Mosaics4View component
import Mosaics4View from "../Mosaics/Mosaics4/Mosaics4View";
//import MainAnalogiesView component
import MainAnalogiesView from "../Analogies/MainAnalogiesView";
//import Analogies1View component
import Analogies1View from "../Analogies/Analogies1/Analogies1View";
//import Analogies2View component
import Analogies2View from "../Analogies/Analogies2/Analogies2View";
//import Analogies3View component
import Analogies3View from "../Analogies/Analogies3/Analogies3View";
//import Analogies4View component
import Analogies4View from "../Analogies/Analogies4/Analogies4View";
//import ASL WordPlay component
// import ASLWordPlay from '../ASLWordPlay/ASLWordPlay'
//import Resources component
import Resources from "../Resources/Resources";
//import Profile
import ProfileView from "../Profile/ProfileView";

export default function Routes({ games }) {
  //will need to pass down matching game with game id as property
  //based on the who the player is (player_id)

  return (
    // Allows you to switch paths when clicked
    <Switch>
      <div className="Routes">
        <header className="Routes-header">
          <Route path="/profile">
            {/* This brings us to the Profile Page, 
                            but it doesn't affect the Sidebar links */}
            <ProfileView />
          </Route>
          <Route path="/welcome" exact>
            <WelcomePage />
          </Route>

          <Route path="/" exact>
            {/* This is the Component for Home */}
            <DashboardView />
          </Route>

          <Route path="/image_puzzle_list">
            {/* This is the Component for Puzzle */}
            <MainPuzzleView />
          </Route>

          <Route path="/image_puzzle1">
            {/* This is the Component for Puzzle */}
            <ImagePuzzle1View />
          </Route>

          <Route path="/image_puzzle2">
            {/* This is the Component for Puzzle */}
            <ImagePuzzle2View />
          </Route>

          <Route path="/image_puzzle3">
            {/* This is the Component for Puzzle */}
            <ImagePuzzle3View />
          </Route>

          <Route path="/image_puzzle4">
            {/* This is the Component for Puzzle */}
            <ImagePuzzle4View />
          </Route>

          <Route path="/categories">
            {/* This is the Component for Categories */}
            <MainCategoriesView />
          </Route>

          <Route path="/categories1">
            {/* This is the Component for Categories */}
            <Categories1View />
          </Route>

          <Route path="/categories2">
            {/* This is the Component for Categories */}
            <Categories2View />
          </Route>

          <Route path="/categories3">
            {/* This is the Component for Categories */}
            <Categories3View />
          </Route>

          <Route path="/categories4">
            {/* This is the Component for Categories */}
            <Categories4View />
          </Route>

          <Route path="/patterns">
            {/* This is the Component for Patterns */}
            <MainPatternsView />
          </Route>

          <Route path="/patterns1">
            {/* This is the Component for Patterns 1 */}
            <Patterns1View />
          </Route>

          <Route path="/patterns2">
            {/* This is the Component for Patterns 2 */}
            <Patterns2View />
          </Route>

          <Route path="/patterns3">
            {/* This is the Component for Patterns 3 */}
            <Patterns3View />
          </Route>

          <Route path="/patterns4">
            {/* This is the Component for Patterns 4 */}
            <Patterns4View />
          </Route>

          <Route path="/situations">
            {/* This is the Component for MainSituationsView */}
            <MainSituationsView />
          </Route>

          <Route path="/situations1">
            {/* This is the Component for Situations 1*/}
            <Situations1View />
          </Route>

          <Route path="/situations2">
            {/* This is the Component for Situations 2 */}
            <Situations2View />
          </Route>

          <Route path="/situations3">
            {/* This is the Component for Situations 3*/}
            <Situations3View />
          </Route>

          <Route path="/situations4">
            {/* This is the Component for Situations 4*/}
            <Situations4View />
          </Route>

          <Route path="/mosaics">
            {/* This is the Component for Mosaics  */}
            <MainMosaicsView />
          </Route>

          <Route path="/mosaics1">
            {/* This is the Component for Mosaics  */}
            <Mosaics1View />
          </Route>

          <Route path="/mosaics2">
            {/* This is the Component for Mosaics  */}
            <Mosaics2View />
          </Route>

          <Route path="/mosaics3">
            {/* This is the Component for Mosaics  */}
            <Mosaics3View />
          </Route>

          <Route path="/mosaics4">
            {/* This is the Component for Mosaics  */}
            <Mosaics4View />
          </Route>

          <Route path="/analogies">
            {/* This is the Component for Main Analogies */}
            <MainAnalogiesView />
          </Route>

          <Route path="/analogies1">
            {/* This is the Component for Main Analogies */}
            <Analogies1View />
          </Route>

          <Route path="/analogies2">
            {/* This is the Component for Main Analogies */}
            <Analogies2View />
          </Route>

          <Route path="/analogies3">
            {/* This is the Component for Main Analogies */}
            <Analogies3View />
          </Route>

          <Route path="/analogies4">
            {/* This is the Component for Main Analogies */}
            <Analogies4View />
          </Route>

          {/*<Route path="asl_wordplay">
                        This is the Component for ASL WordPlay */}
          {/* <ASLWordPlay />
                    </Route> */}

          <Route path="/resources">
            {/* This is the Component for Resources*/}
            <Resources />
          </Route>
        </header>
      </div>
    </Switch>
  );
}
