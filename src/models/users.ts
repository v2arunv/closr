import _ from 'lodash';

export interface IAddress {
    street?: string,
    suite?: string,
    city?: string,
    zipcode?: string,
    geo?: {
        lat?: string,
        lng?: string
    }
}

export interface ICompany {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    profilePictureURL?: string,
    phone?: string,
    website?: string,
    address?: IAddress,
    company?: ICompany,
}

export const convertPayloadToModel = (payload: any): IUser => {
    const company: ICompany = _.get(payload, 'company', null);
    const address: IAddress = _.get(payload, 'address', null);
    const {
        id,
        name,
        username,
        email,
        phone,
        website
    } = payload;
    return {
        id,
        name,
        username,
        email,
        phone,
        website,
        company,
        address,
        profilePictureURL: 'https://semantic-ui.com/images/avatar2/large/lindsay.png',
    };
};