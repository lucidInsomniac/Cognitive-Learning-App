import React from 'react'


export default function MosaicsHint () {

    return (

        <div className="MosaicsHint">

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
                            Instructions to Mosaics
                        </h4>

                            <h5 className="modal-subtitle">
                                How to solve:
                            </h5>

                                <p className="modal-text">
                                  Whoopsies! You've caught me! We're still under construction!
                                </p>

                    <label 
                        className="paper-btn margin" 
                        htmlFor="modal-1"
                    >
                        To be continued . . . =3
                    </label>

                </div>
            </div>

        </div>

    )
    
}