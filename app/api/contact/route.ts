const clean = (value: unknown, max: number) => typeof value === "string" ? value.replace(/[<>]/g, "").trim().slice(0,max) : "";
export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string,unknown>;
    const name=clean(body.name,80), email=clean(body.email,160), subject=clean(body.subject,140), message=clean(body.message,3000), website=clean(body.website,100);
    if (website) return Response.json({ ok:true });
    if (!name || !subject || message.length<10 || !/^\S+@\S+\.\S+$/.test(email)) return Response.json({ error:"Invalid form fields." },{status:400});
    const key=process.env.RESEND_API_KEY, to=process.env.CONTACT_EMAIL;
    if (!key || !to) return Response.json({ error:"Contact delivery is not configured yet." },{status:503});
    const sent=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({from:"Portfolio <onboarding@resend.dev>",to:[to],reply_to:email,subject:`Portfolio: ${subject}`,html:`<h2>New portfolio message</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g,"<br>")}</p><p><small>${new Date().toISOString()}</small></p>`})});
    if (!sent.ok) throw new Error("Delivery failed");
    return Response.json({ok:true});
  } catch { return Response.json({error:"Unable to send message."},{status:500}); }
}
