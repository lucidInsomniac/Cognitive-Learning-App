import React from 'react'

export default function CategoriesHint () {

    
    return (

        <div className="CategoriesHint">

            <div className="row flex-spaces child-borders" id="categories-hint">
                <label 
                    id="categories-hint"
                    className="paper-btn margin" 
                    htmlFor="modal-1"
                >
                    ? Click Me for Hint
                </label>
             </div>

             <input 
                className="modal-state" 
                id="modal-1" 
                type="checkbox" 
            />

            <div className="modal">
                <label 
                className="modal-bg" 
                htmlFor="modal-1"
                >
                </label>

                <div className="modal-body">
                    <label 
                        className="btn-close" 
                        htmlFor="modal-1"
                    >
                        X
                    </label>

                        <h4 className="modal-title">
                            Instructions to Categories
                        </h4>

                            <h5 className="modal-subtitle">
                                How to solve:
                            </h5>

                                <p className="modal-text">
                                    1. Sort the cards from two groups of cards into the correct category. 
                                        Drag 1 card from Group 2: Let's Play and drop into Group 1: Farm Animal's. 
                                        Fill Group 1: Farm Animals with the same category cards until 
                                        Group 1: Farm Animals is filled.
                                </p>

                                <p className="modal-text">
                                    2. In Group 1: Farm Animals, three of them share something in common. 
                                        What can it be? Choose 2 cards from Group 2: Let's Play, that matches 
                                        the ones in Farm Animals.
                                </p>

                                <p className="modal-text">
                                    3. If you get stuck and need to see the instructions again, 
                                        click the white middle button labled "? Click Me for Hint".
                                </p>

                                <p className="modal-text">
                                    4. When you are done, click on the yellow button 
                                        called "Done", located on the bottom right.
                                </p>

                                <p className="modal-text">
                                    5. If you need to try again, click on the yellow 
                                        button called "Try Again", located on top of the "? Click Me for Hint" button.
                                </p>

                                <p className="modal-text">You can do it!</p>

                    <label 
                        className="paper-btn margin" 
                        htmlFor="modal-1"
                    >
                        Adventure Time!
                    </label>

                </div>
            </div>

        </div>
        
    ) 


}