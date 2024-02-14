import {useReducer} from "react";
import {Like, MediaItemWithOwner} from "../types/DBTypes";

type LikeState = {
  count: number;
  userLike: Like | null;
};

type LikeAction = {
  type: 'setLikeCount' | 'like';
  count?: number;
  like?: Like | null;
};

const likeInitialState: LikeState = {
  count: 0,
  userLike: null,
};

const likeReducer = (state: LikeState, action: LikeAction) => {

  return state;
};

const Likes = ({item}: {item: MediaItemWithOwner}) => {
  const [likeState, likeDispatch] = useReducer(likeReducer, likeInitialState);

  return (
    <>
      Like count: x
      <button className="bg-slate-700 p-2 hover:bg-slate-950"
        onClick={() => {
          console.log('media liked, id:', item.media_id);
          // post like
          likeDispatch({type: 'like', like: 'like result from api'});
        }}
      >
        Like
      </button>
    </>
  );
};

export default Likes;
