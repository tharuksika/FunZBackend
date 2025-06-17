export const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') return next();
  res.status(403).json({ message: 'Access denied. Admins only.' });
};

export const isClub = (req, res, next) => {
  if (req.user && req.user.role === 'club') return next();
  res.status(403).json({ message: 'Access denied. Clubs only.' });
};
