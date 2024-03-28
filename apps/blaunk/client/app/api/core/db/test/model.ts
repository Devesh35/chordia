import mongoose, { Document, Schema } from 'mongoose';

type TestType = Document & {
  time: number;
};

const testSchema = new Schema<TestType>({
  time: {
    type: Number,
    required: true,
  },
});

export const TestModel =
  mongoose.models.test || mongoose.model<TestType>('test', testSchema);
