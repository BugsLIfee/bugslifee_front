import React, { Component } from 'react'
import Freeboardpost from './FreeBoardPost';
import "./scss/FreeBoardListView.scss"

export default class Freeboardlistview extends Component {

    render() {
        const freeboard_list = this.props.freeboard_list;
        // const onSelectPost = this.props.onSelectPost;

        return (
        <div>
            {freeboard_list.map((post)=>{
            return <Freeboardpost post={post} />
                })}
        </div>)
    }
}
