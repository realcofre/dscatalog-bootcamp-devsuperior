import React, { useState } from 'react';
import './styles.scss';
import BaseForm from '../../BaseForm';
import { makeRequest } from 'core/utils/request';

type FormState = {
    name: string;
    price: string;
    category: string;
    description: string;
}

type formEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
const Form = () => {

    const [formData, setFormData] = useState<FormState>({
        name: '',
        price: '',
        category: '',
        description: ''
    });

    const handleOnChange = (event: formEvent) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            ...formData,
            imgUrl: 'https://images-americanas.b2w.io/produtos/01/00/img/44285/6/44285667_1GG.jpg',
            categories: [{ id: formData.category}]
        }
        makeRequest({ 
            url: '/products',
            method: 'POST',
            data: payload
        }).then(() => {
            setFormData({name: '', category: '', price: '', description: ''});
        })
    }

    return (
        <form onSubmit={handleSubmit}>

            <BaseForm title="cadastrar um produto">

                <div className="row">
                    <div className="col-6">
                        <input
                            placeholder="Nome do produto"
                            value={formData.name}
                            name="name"
                            type="text"
                            className="form-control mb-5"
                            onChange={handleOnChange}
                        />
                        <select 
                            className="form-control mb-5" 
                            value={formData.category}
                            name="category"
                            onChange={handleOnChange}>
                            <option value="1">Livros</option>
                            <option value="3">Computadores</option>
                            <option value="2">Eletrônicos</option>
                        </select>
                        <input
                            placeholder="Preço"
                            value={formData.price}
                            name="price"
                            type="text"
                            className="form-control"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="col-6">
                        <textarea 
                        name="description" 
                        value={formData.description}
                        className="form-control"
                        onChange={handleOnChange}
                        cols={30} rows={10} />
                    </div>
                </div>
            </BaseForm>
        </form>
    )
}

export default Form;