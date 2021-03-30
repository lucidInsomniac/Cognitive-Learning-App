import React from 'react'

export default function SituationsHint () {

    
    return (

        <div className="SituationsHint">

            <div className="row flex-spaces child-borders" id="situations-hint">
                <label 
                    id="situations-hint"
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
                            Instructions to Situations
                        </h4>

                            <h5 className="modal-subtitle">
                                How to solve:
                            </h5>

                                <p className="modal-text">
                                    1. There are 4 pictures of pizzas with different toppings, and each are cut in half. Match
                                    the missing halves with the matching toppings. 
                                </p>

                                <p className="modal-text">
                                    2. One half of the pizza toppings are missing! Oh no! Choose the missing pizza topping
                                    from a bunch of other pizza toppings. Yummy!
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

                                <p className="modal-text">Good luck!</p>

                    <label 
                        className="paper-btn margin" 
                        htmlFor="modal-1"
                    >
                        Mamma Mia! 
                    </label>

                </div>
            </div>

        </div>
        
    ) 


}