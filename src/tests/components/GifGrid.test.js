import React from 'react';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
const { shallow } = require("enzyme");
const { default: GifGrid } = require("../../components/GifGrid");
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'One Punch';

    test('debe de mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data : [],
            loading : true
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de mostrar items cuando se cargan imagénes useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'http://localhost/cualquiercosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: 'DEF',
            url: 'http://localhost/cualquiercosa.jpg',
            title: 'Cualquier cosa'
        }];
        useFetchGifs.mockReturnValue({
            data : gifs,
            loading : false
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
})
