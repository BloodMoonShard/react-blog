import * as types from '../actions/types'
import { List as iList } from 'immutable'
import _ from 'lodash'


const initialStateStub = {
    users: [
        {
            id: "0",
            title: 'Hello first item',
            description: 'Natoque amet augue elit pulvinar in montes sit dis montes tincidunt proin? Sed ultricies! Arcu. Ac. Aliquam adipiscing, augue turpis nec nec. In turpis! Rhoncus nascetur elementum placerat sed mattis adipiscing, natoque vel elementum natoque nec et placerat. Tincidunt, ridiculus elementum massa dignissim aliquet aenean, sed. Integer proin! Et enim urna et penatibus parturient, mus tempor sit non augue tincidunt odio ac. Eu porttitor risus tortor, platea amet urna pulvinar parturient adipiscing, adipiscing ultrices parturient non porta dignissim! Et magna. A scelerisque a enim, porttitor sit, sed pellentesque, cum mus augue! Turpis augue lundium, et tempor, tincidunt adipiscing lacus enim mauris penatibus in tortor et parturient amet dignissim? Cursus dapibus, dolor ac lorem urna et vel? Habitasse porta massa porttitor.'
        },
        {
            id: "1",
            title: 'Hello first item2',
            description: 'Natoque amet augue elit pulvinar in montes sit dis montes tincidunt proin? Sed ultricies! Arcu. Ac. Aliquam adipiscing, augue turpis nec nec. In turpis! Rhoncus nascetur elementum placerat sed mattis adipiscing, natoque vel elementum natoque nec et placerat. Tincidunt, ridiculus elementum massa dignissim aliquet aenean, sed. Integer proin! Et enim urna et penatibus parturient, mus tempor sit non augue tincidunt odio ac. Eu porttitor risus tortor, platea amet urna pulvinar parturient adipiscing, adipiscing ultrices parturient non porta dignissim! Et magna. A scelerisque a enim, porttitor sit, sed pellentesque, cum mus augue! Turpis augue lundium, et tempor, tincidunt adipiscing lacus enim mauris penatibus in tortor et parturient amet dignissim? Cursus dapibus, dolor ac lorem urna et vel? Habitasse porta massa porttitor.'
        },
        {
            id: "5",
            title: 'Hello first item3',
            description: 'Natoque amet augue elit pulvinar in montes sit dis montes tincidunt proin? Sed ultricies! Arcu. Ac. Aliquam adipiscing, augue turpis nec nec. In turpis! Rhoncus nascetur elementum placerat sed mattis adipiscing, natoque vel elementum natoque nec et placerat. Tincidunt, ridiculus elementum massa dignissim aliquet aenean, sed. Integer proin! Et enim urna et penatibus parturient, mus tempor sit non augue tincidunt odio ac. Eu porttitor risus tortor, platea amet urna pulvinar parturient adipiscing, adipiscing ultrices parturient non porta dignissim! Et magna. A scelerisque a enim, porttitor sit, sed pellentesque, cum mus augue! Turpis augue lundium, et tempor, tincidunt adipiscing lacus enim mauris penatibus in tortor et parturient amet dignissim? Cursus dapibus, dolor ac lorem urna et vel? Habitasse porta massa porttitor.'
        }
    ]
}

export const users = (state = initialStateStub, action) => {
    switch (action.type) {
        case types.UPDATE:
            console.log(123)
            const maxId = _.maxBy(state.users, (item)=>item.id)
            if(_.isNil(action.data.id)){
                action.data.id = (+maxId.id+1).toString()
                return state.users.push(action.data)
            }
            return _.set(state.users, `users.${action.data.id}`, action.data)
        case types.REMOVE:
            console.log(123)
            return _.filter(state.users, (item)=>item.id !== action.id)
        default:
            return state
    }
}

