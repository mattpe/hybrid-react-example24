import {Link} from 'react-router-dom';
import {MediaItemWithOwner} from '../types/DBTypes';
import {useUserContext} from '../hooks/ContextHooks';
import {useMedia} from '../hooks/graphQLHooks';

const MediaRow = (props: {item: MediaItemWithOwner}) => {
  const {item} = props;
  const {user} = useUserContext();
  const {deleteMedia} = useMedia();

  const deleteHandler = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }
      const result = await deleteMedia(item.media_id, token);
      console.log('delete result', result);
    } catch (e) {
      console.error('delete failed', (e as Error).message);
    }

  return (
    <tr className="*:p-4">
      <td className="flex items-center justify-center border border-slate-700">
        <img
          className="h-60 w-72 object-cover"
          src={item.thumbnail}
          alt={item.title}
        />
      </td>
      <td className="border border-slate-700">{item.title}</td>
      <td className="text-ellipsis border border-slate-700">
        {item.description}
      </td>
      <td className="border border-slate-700">
        {new Date(item.created_at).toLocaleString('fi-FI')}
      </td>
      <td className="border border-slate-700">{item.filesize}</td>
      <td className="border border-slate-700">
        {item.media_type.replace('&#x2F;', '/')}
      </td>
      <td className="border border-slate-700">{item.owner.username}</td>
      <td className="border border-slate-700">
        <div className="flex flex-col">
          <Link
            className="bg-slate-600 p-2 text-center hover:bg-slate-950"
            to="/single"
            state={item}
          >
            View
          </Link>
          {user &&
            (user.user_id === item.user_id || user.level_name === 'Admin') && (
              <>
                <button
                  className="bg-slate-700 p-2 hover:bg-slate-950"
                  onClick={() => console.log('modify', item)}
                >
                  Modify
                </button>
                <button
                  className="bg-slate-800 p-2 hover:bg-slate-950"
                  onClick={() => console.log('delete', item)}
                >
                  Delete
                </button>
              </>
            )}
        </div>
        <p>Comments: {item.comments_count}</p>
      </td>
    </tr>
  );
};

export default MediaRow;
