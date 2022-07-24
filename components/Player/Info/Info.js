import React from 'react';

export default function Info({ musics, curTrack }) {

    console.log(musics)

    return (
        <div>
            <h2>{musics?.[curTrack]?.name}</h2>
            <h3>{musics?.[curTrack]?.game}</h3>
        </div>
    )
}
