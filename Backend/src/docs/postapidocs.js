// docs/postRoutesDocs.js

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     description: Endpoint to create a new post.
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: caption
 *         type: string
 *         description: Caption for the post
 *         required: true
 *       - in: formData
 *         name: image
 *         type: file
 *         description: Image file for the post
 *         required: true
 *     responses:
 *       201:
 *         description: Post created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Post created successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     caption:
 *                       type: string
 *                       example: "First post with user authentication"
 *                     image:
 *                       type: string
 *                       example: "https://example.com/image.jpg"
 *                     user:
 *                       type: string
 *                       example: "671b387dae558de95cd57393"
 *                     _id:
 *                       type: string
 *                       example: "671b66ae0737bf6b7e04d9a4"
 *                     __v:
 *                       type: integer
 *                       example: 0
 */

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Retrieve a list of posts
 *     description: Fetches a limited list of posts.
 *     parameters:
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           example: 0
 *         required: false
 *         description: The number of items to skip before starting to collect the result set
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 0
 *         required: false
 *         description: The maximum number of items to return (default is 3).
 *     responses:
 *       200:
 *         description: A list of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Posts fetched successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     allpost:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: "671b39d1ae558de95cd57398"
 *                           caption:
 *                             type: string
 *                             example: "First post with user authentication"
 *                           image:
 *                             type: string
 *                             example: "https://res.cloudinary.com/de2k7jjbl/image/upload/v1729837521/jmsqhzyccw9hnmyshdvo.jpg"
 *                           user:
 *                             type: object
 *                             properties:
 *                               _id:
 *                                 type: string
 *                                 example: "671b3884ae558de95cd57395"
 *                               username:
 *                                 type: string
 *                                 example: "rupam12345"
 *                               email:
 *                                 type: string
 *                                 example: "rupammondaaaal66456@gmail.com"
 *                           __v:
 *                             type: integer
 *                             example: 0
 */

