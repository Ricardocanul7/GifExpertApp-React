import React from 'react'
import { shallow } from 'enzyme';
const { GifGridItem } = require("../../components/GifGridItem")

describe('Pruebas en componentes', () => {
    test('debe mostrarse GifGridItems correctamente', () => {
        const wrapper = shallow(<GifGridItem />);
        expect(wrapper).toMatchSnapshot();
    })
    
})
