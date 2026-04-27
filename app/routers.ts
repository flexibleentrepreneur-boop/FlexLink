import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { getCategories, getListingsByCategory, getListingById, getUserBookings, getWellnessMetrics } from "./db";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  categories: router({
    list: publicProcedure.query(() => getCategories()),
  }),

  listings: router({
    byCategory: publicProcedure
      .input(z.object({ categoryId: z.number() }))
      .query(({ input }) => getListingsByCategory(input.categoryId)),
    byId: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(({ input }) => getListingById(input.id)),
  }),

  bookings: router({
    myBookings: protectedProcedure.query(({ ctx }) => getUserBookings(ctx.user.id)),
  }),

  wellness: router({
    metrics: protectedProcedure.query(({ ctx }) => getWellnessMetrics(ctx.user.id)),
  }),
});

export type AppRouter = typeof appRouter;
