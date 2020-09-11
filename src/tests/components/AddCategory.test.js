import React from 'react';
const { shallow } = require("enzyme")
const { AddCategory } = require("../../components/AddCategory")

describe('Pruebas en <AddCategory />', () => {
    const setCategories = () => {};
    test('debe de mostrarse correctamente', () => {
        const wrapper = shallow(<AddCategory setCategories={setCategories} />);
        expect(wrapper).toMatchSnapshot();
    })
    
})
