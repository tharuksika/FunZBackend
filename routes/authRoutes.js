import express from 'express';
import { register, login ,getAllUsers,updateUser ,deleteUser} from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';
import { getAllSponsors } from '../controllers/adminController.js';






const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/', getAllUsers); 
router.put('/:id', updateUser);    // PUT /api/users/:id
router.delete('/:id', deleteUser); // DELETE /api/users/:id

router.get('/admin/sponsors', protect, authorizeRoles('admin'), getAllSponsors);

router.get('/admin-only', authorizeRoles('admin'), (req, res) => {
  res.send('Welcome admin');
});

export default router;
