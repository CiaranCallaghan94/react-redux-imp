import { CREATE_LINK} from './types';

export const createLink = (linkData) => dispatch => {
  const url = linkData.domain + "/" + linkData.callback

  dispatch({
    type: CREATE_LINK,
    payload: url
  })
}
