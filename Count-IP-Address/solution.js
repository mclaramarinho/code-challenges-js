// Explained (i found it a little hard - not a math genius)

export function ipsBetween(start, end) {
    start = start.split(".");
    end = end.split(".");

    let count = 0;

    for (let i = 0; i <= 3; i++) {
        // get the difference between the highest ip number and the lowest (at that slot)
        const timesItChanges = end[i] - start[i];

        // then calculate the max combinations achieved from that slot 
        // (slot 1 -> (timesItChanges * 256^3) | slot 2 -> (timesItChanges * 256^2)...)
        const combinations = timesItChanges * (256 ** (3 - i));

        // add the amount of combinations to the final count
        count += combinations;
    }

    return count;
}

/** EXAMPLE:
A.B.C.D (lets reference the slots by letters)

1.2.3.4 to 5.6.7.8

- From A, you can have 256 combinations for each subsequent slot (B, C and D)
- From B, you can have 256 combinations for each subsequent slot (C and D)
- From C, you can have 256 combinations for the next slot (D)
- From D, you have no slot next.

Each slots changes n times, so the combinations happen for it time it changes.
i.e: For slot A, you get 256^3 4 times
2.x.y.z
3.x.y.z
4.x.y.z
5.x.y.z

So calculate the difference, between the slots
    In this case: 4.4.4.4

Then calculate all the possible combinations like this:
(4 x (256^3)) + (4 x (256^2)) + (4 x (256^1)) + (4 x (256^0)) 
// */