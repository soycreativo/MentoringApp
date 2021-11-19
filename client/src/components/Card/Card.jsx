import React from 'react'
import Styles from'./Card.module.css'


const Card = (props) => {
    return (  
        <div>
            <div className={Styles.bottom}>
                  

                  <div className={Styles.green}>
                      
                      <div className={Styles.container}>
  
                         {props.container}
  
                      </div>
                  </div> 

                  <>{props.bottom}</>
  
                  
              </div>

        </div>
    );
}
 
export default Card;