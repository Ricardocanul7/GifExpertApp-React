import React from 'react'
import { shallow } from 'enzyme';
const { GifGridItem } = require("../../components/GifGridItem")

describe('Pruebas en componentes', () => {
    const title = 'Un titulo';
    const url = 'http://localhost/algo.jpg';

    test('debe mostrarse GifGridItems correctamente', () => {
        const wrapper = shallow(<GifGridItem title={title} url={url}/>);
        expect(wrapper).toMatchSnapshot();
    })
    
})
