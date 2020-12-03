import React from 'react'
import _ from 'lodash'

const AlbumsList = ({albums}) => {
    return (
        <div>
            {Object.keys(albums).length > 0 && (
                <div>
                    {albums.items.map((album, index) => {
                        return(
                            <div>
                                <h3>{album.name}</h3>
                                <p>{album.artists.map((artist) => artist.name).join(', ')}</p>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
export default AlbumsList;