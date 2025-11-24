import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const { EMAIL_USER, EMAIL_PASS, EMAIL_TO, SMTP_HOST, SMTP_PORT, SMTP_SECURE } = process.env;

    if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
        console.error('Missing email environment variables:', {
            EMAIL_USER: !!EMAIL_USER,
            EMAIL_PASS: !!EMAIL_PASS,
            EMAIL_TO: !!EMAIL_TO,
        });
        return res.status(500).json({ message: 'Email configuration is incomplete on the server' });
    }

    // Support custom SMTP provider if env vars are provided, otherwise fallback to Gmail service
    const transporterOptions = SMTP_HOST
        ? {
                host: SMTP_HOST,
                port: SMTP_PORT ? parseInt(SMTP_PORT, 10) : 587,
                secure: SMTP_SECURE === 'true' || false,
                auth: {
                    user: EMAIL_USER,
                    pass: EMAIL_PASS,
                },
            }
        : {
                service: 'gmail',
                auth: {
                    user: EMAIL_USER,
                    pass: EMAIL_PASS,
                },
            };

    const transporter = nodemailer.createTransport(transporterOptions);

    try {
        // Verify transporter configuration before sending
        await transporter.verify();

        const mailOptions = {
            from: EMAIL_USER,
            to: EMAIL_TO,
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error && error.message ? error.message : error);
        return res.status(500).json({ message: 'Error sending email', error: error && error.message ? error.message : String(error) });
    }
}
