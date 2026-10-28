export const Posts = ({ postList }) => {
    return (
        <div id='posts'>
            <h2>Posts List</h2>
            {postList.length > 0 ? (
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tittle</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {postList.map(post => {
                            return (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <h2>Loading Posts ...</h2>
            )}
        </div>
    );
};