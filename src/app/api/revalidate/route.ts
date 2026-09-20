import { revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
    }

    if (!body?._type) {
      return NextResponse.json({ message: 'Bad Request' }, { status: 400 });
    }

    revalidatePath('/', 'layout');

    return NextResponse.json({ revalidated: true, type: body._type, now: Date.now() });
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating', error: (err as Error).message },
      { status: 500 },
    );
  }
}
