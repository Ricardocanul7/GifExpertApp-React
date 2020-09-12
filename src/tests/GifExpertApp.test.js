import React from 'react';
import { GifExpertApp } from '../GifExpertApp';
import '@testing-library/jest-dom'
const { shallow } = require("enzyme");

describe('Pruebas en GifExpertApp', () => {
    test('debe mostrarse correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar una lista de categorias', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
})
