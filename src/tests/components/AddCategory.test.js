import React from 'react';
const { shallow } = require("enzyme")
const { AddCategory } = require("../../components/AddCategory")

describe('Pruebas en <AddCategory />', () => {
    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: {value : value} });
    })
    
})
