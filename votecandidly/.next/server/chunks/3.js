"use strict";exports.id=3,exports.ids=[3],exports.modules={5555:(e,t,i)=>{i.d(t,{Z:()=>n});let n=new(i(3524)).PrismaClient},1003:(e,t,i)=>{i.d(t,{XI:()=>o,gj:()=>l,Lv:()=>p,vw:()=>m,P7:()=>u,gT:()=>c,Nq:()=>s});let n=new(i(2032)).ZP({apiKey:process.env.OPENAI_API_KEY||""});var a=i(5555),r=i(3524);async function s(e,t){try{if(!e)throw Error("Invalid user ID");let i=await a.Z.users.update({where:{user_id:e},data:t});console.log("User updated successfully:",i)}catch(e){console.error("Error updating user:",e)}}let o=async(e,t,i)=>{try{let n=await a.Z.user_event_interactions.create({data:{user_id:e,internalid:t,interaction_type:i}});console.log("Event archived:",n)}catch(e){throw console.error("Error archiving event:",e),e}};async function l(e){var t=new Date,i=String(t.getDate()).padStart(2,"0");let a=String(t.getMonth()+1).padStart(2,"0")+"/"+i+"/"+t.getFullYear();console.log(a),console.log("YYYYYYY");let r={role:"system",content:"You are a helpful assistant designed to output JSON."},s={role:"user",content:`Today's date is ${a}. What are the start and end timestamps for an event described as '${e}' in ISO 8601 format? Keys should be 'start' and 'end' unless you can't decipher the times. In which case return with key 'unknown' and value 'true'`};console.log(r),console.log(s);let o=await n.chat.completions.create({model:"gpt-4-turbo-preview",messages:[r,s],response_format:{type:"json_object"}});console.log(o);let l=JSON.parse(o.choices[0].message.content);console.log(l);let d={};console.log(typeof l),"unknown"in l?d.timing=!1:d.timing=[l.start,l.end],r={role:"system",content:"You are a helpful assistant. When given a description of an event, your job is to extract the main topic of the event as a search term, disregarding any date or time-related details."},s={role:"user",content:`Given the following query: '${e}', what kind of event is the user looking for disregarding its date? Respond with JSON object with key 'search'.`};let c=JSON.parse((o=await n.chat.completions.create({model:"gpt-4-turbo-preview",messages:[r,s],response_format:{type:"json_object"}})).choices[0].message.content);return d.search=c.search,d}async function d(e){let t=e.replace(/\n/g," "),[{embedding:i}]=(await n.embeddings.create({model:"text-embedding-3-large",input:t})).data;return i}let c=async(e,t,i=!1,n,r,s,o=1,l=10)=>{let c=(o-1)*l;if(i)return await a.Z.onboarding.findMany({skip:c,take:l,orderBy:{location:"asc"}});{let i={};if(t){console.log("FECHING"),console.log(e),console.log(t);{let i=await d(e),n=`[${i.join(",")}]`,r=await a.Z.$queryRaw`
    SELECT
        e.internalid,
        e.title,

        e.directionslink,

        e.displaytitle,
        e.displaydescription,
        e.displaytitle,
        e.location,
        e.dropdowns,
        e.eventlink,
        e.timestampstart,
        e.timestampend,
        e.eventendtime,
        e.eventstarttime,
        e.lastupdated,
        e.platform,


        1 - (e.embedding <=> ${n}::vector) as similarity
    FROM events e
    LEFT JOIN user_event_interactions uei ON e.internalid = uei.internalid AND uei.user_id = ${t} AND uei.interaction_type = 'archived'
    WHERE (uei.internalid IS NULL OR uei.user_id IS NULL) 
      AND 1 - (e.embedding <=> ${n}::vector) > .4
    ORDER BY similarity DESC
    LIMIT 8;
`;return console.log(r),r}}return!0===s&&(i.investor=!0),!0===n&&(i.builder=!0),!0===r&&(i.fun=!0),await a.Z.events.findMany({where:i,skip:c,take:l,orderBy:{lastupdated:"desc"}})}},u=async(e,t,i,n,r=!1,s,o,l,c=1,u=10)=>{console.log("magic search event");let p=(c-1)*u;if(r)return await a.Z.onboarding.findMany({skip:p,take:u,orderBy:{location:"asc"}});{let r={};if(n){console.log("FECHING"),console.log(e),console.log(t),console.log(n);{let r=await d(e),s=`[${r.join(",")}]`,o=await a.Z.$queryRaw`
    SELECT
        e.internalid,
        e.title,

        e.directionslink,

        e.displaytitle,
        e.displaydescription,
        e.displaytitle,
        e.location,
        e.dropdowns,
        e.eventlink,
        e.timestampstart,
        e.timestampend,
        e.eventendtime,
        e.eventstarttime,
        e.lastupdated,
        e.platform,


        1 - (e.embedding <=> ${s}::vector) as similarity
    FROM events e
    LEFT JOIN user_event_interactions uei ON e.internalid = uei.internalid AND uei.user_id = ${n} AND uei.interaction_type = 'archived'
    WHERE (uei.internalid IS NULL OR uei.user_id IS NULL) 
      AND 1 - (e.embedding <=> ${s}::vector) > .4
      AND (${t} IS NULL OR e.timestampstart >= ${t}::timestamp)
      AND (${i} IS NULL OR e.timestampend <= ${i}::timestamp)
    ORDER BY similarity DESC
    LIMIT 8;
`;return console.log(o),o}}return!0===l&&(r.investor=!0),!0===s&&(r.builder=!0),!0===o&&(r.fun=!0),await a.Z.events.findMany({where:r,skip:p,take:u,orderBy:{lastupdated:"desc"}})}},p=async(e,t=1,i=10)=>{let n=await a.Z.user_event_interactions.findMany({where:{user_id:e,interaction_type:{not:"archived"}},select:{internalid:!0,interaction_type:!0}}),r={};return n.forEach(e=>{r[e.internalid]=e.interaction_type}),(await a.Z.events.findMany({where:{internalid:{in:Object.keys(r)}},skip:(t-1)*i,take:i,orderBy:{lastupdated:"desc"}})).map(e=>({...e,interaction_type:r[e.internalid]||void 0}))},m=async(e,t=!1,i,n,s,o=1,l=10,d)=>{let c=(o-1)*l;if(t)return await a.Z.onboarding.findMany({skip:c,take:l,orderBy:{location:"asc"}});{let t={};if(e){console.log("FETCHING USER INTERACTIONS");let i=(await a.Z.user_event_interactions.findMany({where:{user_id:e},select:{internalid:!0}})).map(e=>e.internalid);i.length&&(t.NOT=[{internalid:{in:i}}])}if(!0===s&&(t.investor=!0),!0===i&&(t.builder=!0),!0===n&&(t.fun=!0),!d)return await a.Z.events.findMany({where:t,skip:c,take:l,orderBy:{lastupdated:"desc"}});{let i=`[${d.join(",")}]`;return await a.Z.$queryRaw`
            SELECT
                e.internalid,
                e.title,
                e.directionslink,
                e.displaytitle,
                e.displaydescription,
                e.location,
                e.dropdowns,
                e.eventlink,
                e.timestampstart,
                e.timestampend,
                e.eventendtime,
                e.eventstarttime,
                e.lastupdated,
                e.platform,
                1 - (e.embedding <=> ${i}::vector) as similarity
            FROM events e
            LEFT JOIN user_event_interactions uei ON e.internalid = uei.internalid AND uei.user_id = ${e} AND uei.interaction_type = 'archived'
            WHERE (uei.internalid IS NULL OR uei.user_id IS NULL)
              AND ${r.Prisma.sql`1 - (e.embedding <=> ${i}::vector) > .4`}
              ${t.NOT?`AND e.internalid NOT IN (${r.Prisma.join(t.NOT[0].internalid.in)})`:""}
              ${t.investor?"AND e.investor = true":""}
              ${t.builder?"AND e.builder = true":""}
              ${t.fun?"AND e.fun = true":""}    
            ORDER BY similarity DESC
            LIMIT ${l}
            OFFSET ${c};
        `}}}}};