# Institutions and Class mode

How Bullpen works for schools, universities and programmes. Class mode and the institution admin screen are built as a preview in the prototype (Teacher view); this page is the plan for the real app. Prices are examples to test with, not decisions.

## Who is who
- **Institution:** a university, school, club federation or programme that pays. It has one or more admins.
- **Teacher:** runs classes under an institution (a professor, a club lead). Can also be the admin.
- **Class:** a group of students with a join code and invite link, a set of assigned units and optionally a class tournament.
- **Student:** a normal Bullpen user with their own account. Joining a class adds the class and a Pro seat; leaving removes them. Progress, points and badges always stay with the student.

## What an institution gets
- **Seats:** every enrolled student gets Bullpen Pro free (unlimited practice capital, the whole Vault, trade analytics) while the seat lasts.
- **Class mode for teachers:** assign units with due dates, see class progress per unit and per student, export grades as CSV, create class tournaments with no credit and no player limit.
- **Admin screen:** plan and seat usage, teacher accounts and invites, an optional "join with a school email" setting, a quote request.
- **Later:** branded competitions and sponsor units, an API or LMS link (Moodle, Canvas, Blackboard) for grades, single sign-on.

## Plans (example prices)
| Plan | Seats | Teachers | Price |
|---|---|---|---|
| Pilot | 40 | 1 | Free, one class, one semester |
| Class | 60 | 2 | $149 per semester |
| Campus | 1,000 | 20 | $1,200 per semester ($1.20 a seat) |
| University | 5,000 | 100 | From $4,500 per semester, custom terms |

For comparison, one student paying alone is $29.99 a year. Seats are cheap per head on purpose: the value to us is classroom adoption, the data on what works, and the sponsor reach.

## Rules we are proposing
- A seat is used when a student joins a class (or joins with a verified school email, if the admin turns that on). It frees when the student leaves, is removed by the teacher, or the semester ends.
- Over the seat limit, new students join without Pro and the admin is told; nobody loses access to lessons. Existing students keep Pro until the end of the semester.
- Grades and progress shown to a teacher are limited to the units that teacher assigned. Teachers never see a student's trades outside a class tournament, their league, or their profile.
- Under-18 students join through a teacher's code only. No public clans, ads, social links or broker referrals. The school gives the consent and the school decides who may see results.
- Leaving a class removes the teacher's view of that student. Deleting an account removes the student from every roster.
- Class tournaments are fake money only and prizes are trophies and badges, like every Bullpen competition.

## Data model (for the real app, in Supabase)
- `institutions` (id, name, plan, seats, domain, domain_auto_join, term_start, term_end)
- `institution_members` (institution_id, user_id, role: admin or teacher)
- `classes` (id, institution_id, teacher_id, name, join_code, term)
- `class_members` (class_id, user_id, joined_at, left_at). Seat count = distinct active students.
- `assignments` (class_id, unit_id, due_at)
- Progress is read from the student's own lesson results, filtered to assigned units by row-level security.
- `tournaments.class_id` (nullable) links a class tournament.

## What the prototype does not do
- No real accounts, so classes live in one browser and student results are samples made from a hash of each name.
- The seat limit is shown but not enforced, and nothing is billed.
- No LMS link, SSO or email delivery of invites.

## Open decisions (for the two founders)
1. Prices and plan sizes, and whether to charge per seat or per class.
2. Whether Lebanese universities need local pricing, invoicing in lira or a sponsor paying the seats.
3. Who may see a student's results (teacher only, or also the institution admin).
4. Whether a pilot should be free in the first semester for every school, in exchange for a case study.
5. Legal review of the under-18 consent flow and of storing grades.
