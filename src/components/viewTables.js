import React, { Component } from 'react'
import DataTableComp from './datatable'


class ViewTables extends Component {

    render() {
        var song_data = [[], []]
        var artist_data = [[], []]
        for (let i = 0; i < this.props.data.length; i++) {
            let song_index = song_data[0].indexOf(this.props.data[i].song)
            let artist_index = artist_data[0].indexOf(this.props.data[i].artist)
            if (song_index === -1) {
                song_data[0].push(this.props.data[i].song);
                song_data[1].push(1);
            }
            else {
                song_data[1][song_index] += 1
            }
            if (artist_index === -1) {
                artist_data[0].push(this.props.data[i].artist)
                artist_data[1].push(1)
            }
            else {
                artist_data[1][artist_index] += 1
            }

        }
        console.log(song_data,artist_data)
        return (
            <div className='row'>
                <div className='col'><DataTableComp key={0} title={'Song Data'} val={'song'} data={song_data}/></div>
                <div className='col'><DataTableComp key={1} title={'Artist Data'} val={'artist'} data={artist_data}/></div>
            </div>
        )
    }
}

export default ViewTables; 