import argparse
import os
import pathlib
import shutil
import traceback


def zip_parser():
    parser = argparse.ArgumentParser(
        "Used to zip a set of folders found in a given path. "
    )
    parser.add_argument(
        "PATH",
        type=str,
        help="The location of the folders.",
    )

    return parser


def main():
    args = zip_parser().parse_args()

    path_to_folders = pathlib.Path(args.PATH).resolve()
    if not path_to_folders.exists():
        raise Exception("Cannot find the location: %s" % str(path_to_folders))

    folders_to_zip = next(os.walk(str(path_to_folders)))[1]
    for folder in folders_to_zip:
        abs_folder_path = str(path_to_folders / folder)

        try:
            shutil.make_archive(abs_folder_path, "zip", abs_folder_path)
        except Exception as e:
            print("Could not zip this folder: %s" % abs_folder_path)
            traceback.print_exc()

        print("Zipped %s" % abs_folder_path)


if __name__=="__main__":
    main()
