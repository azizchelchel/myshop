import Prisma from '@prisma/client';
const prisma = new Prisma.PrismaClient();


function createAuditLog(event, userId = null, ipAddress = null) {
  return prisma.auditLog.create({
    data: {
      userId,
      event,
      ipAddress
    },
  });
}

export function auditTrailMiddleware(req, res, next) {
  const userId = req.userId;
  const event = `${req.method} ${req.originalUrl}`;
  const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress // Fetching IP address from request headers
  createAuditLog(event, userId, ipAddress)
    .then(() => next())
    .catch((err) => {
      console.error('Error creating audit log:', err);
      res.status(500).json(
        {
          success: false,
          message: err.message
        }
      )
    });
}

// export const auditTrailMiddleware = async (req, res, next) => {
//   const userId = req.userId;
//   const event = req.method === 'POST' ? 'created' : 'updated'

//   try {
//     await prisma.auditLog.create({
//       data: {
//         userId,
//         event,
//       },
//     });
//     next();
//   } 
//   catch (err) {
//     console.error(err);
//     next(err);
//   }
// }


