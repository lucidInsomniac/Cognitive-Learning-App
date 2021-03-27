import React from 'react'

export default function MainPatternsView () {

    return (

        <div className="MainPatternsView ">
            <header>This is the Main Patterns Page</header>


            <div className="row flex-spaces child-borders">
                <label 
                    className="paper-btn margin" 
                    htmlFor="modal-1"
                >
                    Click Here to Start!
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
                            Instructions to Patterns
                        </h4>

                            <h5 className="modal-subtitle">
                                How to solve:
                            </h5>

                                <p className="modal-text">
                                    {/* 1. Drag 1 puzzle piece from Group 1, 
                                    and drop it from the top, and into Group 2. Fill Group 2 with 
                                    the puzzle pieces until there are no more pieces. */}
                                </p>

                                <p className="modal-text">
                                    {/* 2. The puzzle pieces in Group 2 must 
                                    look like the picture on the right hand side. You can drag and drop
                                    the pieces inside Group 2 into the correct order, up and down inside Group 2. */}
                                </p>

                                <p className="modal-text">
                                    {/* 3. When you are done, click on the yellow button 
                                    called "Done", located on the bottom right. */}
                                </p>

                                <p className="modal-text">
                                    {/* 4. If you need to try again, click on the yellow 
                                    button called "Try Again", located on top of the "Done" button. */}
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