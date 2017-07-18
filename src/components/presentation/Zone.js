import React, { Component } from 'react'
import styles from './styles'

class Zone extends Component {    

    render() {
        const style = styles.zone

        return (
            
            <div style={style.container}>
                <h2 style={style.header}>
                    <a style={style.title} href="#">
                        {this.props.currentzone.name}
                    </a><br/>  <br/>                                     
                </h2>

                <span className="detail">
                    {this.props.currentzone.zipCodes}
                </span><br />
                <span className="detail">
                    {this.props.currentzone.numComments} comments
                </span> 
            </div>
            
        )
    }
}

export default Zone