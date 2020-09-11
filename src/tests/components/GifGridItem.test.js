import React from 'react'
import { shallow } from 'enzyme';
const { GifGridItem } = require("../../components/GifGridItem")

describe('Pruebas en componentes', () => {
    const title = 'Un titulo';
    const url = 'http://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('debe mostrarse GifGridItems correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(title);
    })
    
    test('debe de tener la imagen igual al url y alt de los props ', () => {
        const img = wrapper.find('img');
        //console.log(img.props().src);
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    })
    
    test('debe de tener animate__fadeIn ', () => {
        const div = wrapper.find('div');
        const className = div.props().className;
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
    
})
