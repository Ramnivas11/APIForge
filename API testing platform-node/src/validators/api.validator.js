const { z } = require("zod");

const apiRequestSchema = z.object({
    method: z.enum(["GET", "POST", "PUT", "PATCH", "DELETE"]),

    url: z.string().url().refine(
        (val) => {
            try {
                const protocol = new URL(val).protocol;
                return protocol === "http:" || protocol === "https:";
            } catch {
                return false;
            }
        },
        { message: "Only HTTP and HTTPS protocols are allowed." }
    ),

    headers: z.record(z.string()).optional(),

    query: z.record(z.any()).optional(),

    body: z.any().optional(),

    timeout: z.number().min(1000).max(10000).optional()
});

module.exports = {
    apiRequestSchema,
};