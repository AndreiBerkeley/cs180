Requirements: NumPy, SciPy, OpenCV, Matplotlib, scikit-image ;

Install using: python -m pip install numpy scipy opencv-python matplotlib scikit-image ;

Running code instructions:

    1. The JPG, JPEG, PNG, NPY, and Python files used by the programs must be in the same directory as main.py.

    2. To run every part of the project, use:
        python {path_to}/main.py .

    3. To run only a specific part, use:
        python {path_to}/main.py --part 1 ;
        python {path_to}/main.py --part 2.1 ;
        python {path_to}/main.py --part 2.2 ;
        python {path_to}/main.py --part 2.3 ;
        python {path_to}/main.py --part 2.4 .

    4. part_2_2.py and part_2_4.py use the saved *_aligned.npy files. To repeat the alignment, uncomment the corresponding alignment sections in part_2_2.py and select two matching points in each image. The newly saved alignment files will then also be used by part_2_4.py.
    
    5. The programs automatically save the generated result images as JPG files in the same directory. They also print the runtime and result comparison checks used throughout the project.

Warning! Running the full project includes the four-loop convolution implementation from part_1.py, so it takes longer than the remaining programs.

Input files:

1. Assignment images: cameraman.png, taj.jpg, DerekPicture.jpg, nutmeg.jpg, apple.jpeg, orange.jpeg, and orapple.jpg ;

2. Additional images: portrait.jpeg, wolf.jpg, lion.jpg, and crocodile.jpg ;

3. Saved alignment files: derek_aligned.npy, cat_aligned.npy, portrait_aligned.npy, wolf_aligned.npy, lion_aligned.npy, and crocodile_aligned.npy .