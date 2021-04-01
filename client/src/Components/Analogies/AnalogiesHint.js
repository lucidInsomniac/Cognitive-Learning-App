import React from 'react'


export default function AnalogiesHint () {

    return (

        <div className="AnalogiesHint">

            <div className="row flex-spaces child-borders" id="puzzle-hint">
                <label 
                    id="analogies-hint"
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
                            Instructions to Analogies
                        </h4>

                            <h5 className="modal-subtitle">
                                How to solve:
                            </h5>

                                <p className="modal-text">
                                    We're being busy bees to get this done for you.
                                </p>

                            
                    <label 
                        className="paper-btn margin" 
                        htmlFor="modal-1"
                    >
                        Be back very soon!
                    </label>

                </div>
                
            </div>

        </div>
    ) 

}