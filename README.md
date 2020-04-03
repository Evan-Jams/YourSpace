# YourSpace

By - Nathanael Fletcher
By - Evan James

Models:
          Users
          /    \
      Posts <-  Comments

Users: username, hashed password, profile: {img, description, status} / Owns: Posts, Comments.
Posts: body, date, likes / Owns: Comments
Comments: body, date, likes
 ---------------------------------------------------------------------------------------------------
