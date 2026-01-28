import { z } from "zod";

export const fieldConfigSchema = z.object({
	id: z.string(),
	name: z.string(),
	label: z.string(),
	value: z.string(),
});

export type FieldConfig = z.infer<typeof fieldConfigSchema>;

export const outcomesSchema = z.object({
	id: z.string(),
	label: z.string(),
	outcomeLabel: z.string(),
	description: z.string().optional(),
	active: z.boolean().default(false),
});

export type Outcomes = z.infer<typeof outcomesSchema>;

export const automationNodeSchema = z.object({
	id: z.string(),
	title: z.string().min(1, "Title is required"),
	description: z.string().optional(),
	fields: z.array(fieldConfigSchema),
});

export type AutomationNode = z.infer<typeof automationNodeSchema>;
