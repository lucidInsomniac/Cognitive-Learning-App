import React from 'react'


export default function PuzzleHint () {

    return (

        <div className="PuzzleHint">

            <div className="row flex-spaces child-borders" id="puzzle-hint">
                <label 
                    id="pzzle-hint"
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
                            Instructions to Puzzles
                        </h4>

                            <h5 className="modal-subtitle">
                                How to solve:
                            </h5>

                                <p className="modal-text">
                                    1. Drag 1 puzzle piece from Group 1, 
                                    and drop it from the top, and into Group 2. Fill Group 2 with 
                                    the puzzle pieces until there are no more pieces.
                                </p>

                                <p className="modal-text">
                                    2. The puzzle pieces in Group 2 must 
                                    look like the picture on the right hand side. You can drag and drop
                                    the pieces inside Group 2 into the correct order, up and down inside Group 2.
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
                        Ready? Let's Go!
                    </label>

                </div>
                
            </div>

        </div>
    ) 

}