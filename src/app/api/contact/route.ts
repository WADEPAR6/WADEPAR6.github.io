import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(3, 'El asunto debe tener al menos 3 caracteres'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar los datos
    const validatedData = contactSchema.parse(body);
    
    // Enviar el email usando Resend
    const data = await resend.emails.send({
      from: 'Contacto Web <onboarding@resend.dev>', // Cambia esto cuando tengas dominio verificado
      to: ['raulparedes20031221@gmail.com'],
      subject: `Nuevo mensaje: ${validatedData.subject}`,
      replyTo: validatedData.email,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Asunto:</strong> ${validatedData.subject}</p>
        <h3>Mensaje:</h3>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: error.issues },
        { status: 400 }
      );
    }

    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}
