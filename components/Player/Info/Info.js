import React from 'react';
import { H2 } from '../../Header/Styled.Header';
import { H3, InfoSection } from './Styled.Info';

export default function Info({ musics, curTrack }) {
    return (
        <InfoSection>
            <H2>{musics?.[curTrack]?.name}</H2>
            <H3>{musics?.[curTrack]?.game}</H3>
        </InfoSection>
    )
}
