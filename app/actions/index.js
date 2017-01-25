import * as types from './types';

export function remove(id) {
    return {
        type: types.REMOVE,
        id
    };
}

export function update(data){
    return {
        type: types.UPDATE,
        data
    }
}

