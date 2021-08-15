const allUsers = `
SELECT 
    id, 
    username, 
    contact, 
    age, 
    date 
FROM users`;

const allPosts = `
SELECT 
    p.id, 
    p.title, 
    p.post, 
    p.auth_id,
    u.username, 
    p.date 
FROM posts p 
JOIN users u 
ON u.id = p.auth_id
`;

const comments = `
SELECT
    c.id,
    c.comment,
    u.username,
    c.post_id,
    c.date
FROM comments c
JOIN users u
ON u.id = c.user_id
WHERE c.post_id = ?
`;

module.exports = {
  allUsers,
  allPosts,
  comments,
};
