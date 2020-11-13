import { set } from 'mobx'
import React, { Component } from 'react'
import { Input, Dropdown, Button, Dimmer, Loader, Segment} from "semantic-ui-react"
import "../scss/EduList.scss"

const options = [
    { key: 1, text: '교육명', value: 1 },
    { key: 2, text: '기관명', value: 2 },
    { key: 3, text: '지역명', value: 3 },
  ]

export default class EduListHeaderView extends Component {
    constructor(props) {
        super(props)
        this.state = {
          active: "",
          inline: "",
        }
    }

    clickEvent() {
        this.state.active ? this.setState({active: ""}) : this.setState({active: "active"})
        this.state.inline ? this.setState({inline: ""}) : this.setState({inline: "inline"})
    }
    
    render() {
        const {eduLists, syncEdu } = this.props
        
        return (
            <div>
                <img src="../edu/eduHome.png" width="1000px" alt="img"/>
                <div className="eduListHeader">
                    <h5>
                        전체<div className="fontColor">&nbsp;{eduLists}</div>건&nbsp;&nbsp;
                            &nbsp;<Button content='동기화' primary onClick={()=>{
                                    if(syncEdu()){this.clickEvent()}
                                    
                                }
                            }/>
                            <Loader active={this.state.active} inline={this.state.inline}/>
                    </h5>
                    <div className="searchLayout">
                        <Dropdown placeholder='Select' scrolling options={options} className="eduSearchFilter"/>  
                        <Input icon={{ name: "search", circular: true, link: true }} placeholder="Search" className="eduSearchBar"/>
                    </div>
                </div>
            </div>
        )
    }
}
